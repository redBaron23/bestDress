import { API, graphqlOperation } from "aws-amplify";
import PostModel from "../components/Post/PostModel";
import { createUser, createPost, updatePost } from "../graphql/mutations";
import { listPosts } from "../graphql/queries";
import User from "../model/User";
import Log from "../utils/Log";
import LogTags from "../utils/LogTags";
import Storage from "@aws-amplify/storage";
import AuthenticatorService from "./AuthenticatorService";

const TAG = LogTags.POST_SERVICE;

class PostService {
  private uploadImage = (imageUri: string): Promise<string> => {
    return (
      fetch(imageUri)
        .then((response) => response.blob())
        .then((blob) =>
          Storage.put(`${new Date().getTime()}/${imageUri}`, blob, {
            contentType: "image/jpeg", // contentType is optional
          })
        )
        /**@todo this is working but should repair the typescript error string | object Storage.get */
        .then((uri) => Storage.get(uri.key))

        .catch((e) => {
          console.log(`[${TAG}] Error trying to upload ${imageUri}: ${e} `);
          return "";
        })
    );
  };

  public createPost = async (imageUri: string, description: string): Promise<any> => {
    const [username, imageUrl, userId] = await Promise.all([
      AuthenticatorService.getUsername(),
      this.uploadImage(imageUri),
      AuthenticatorService.getUserId(),
    ]);

    if (!imageUrl) {
      return;
    }

    const post = new PostModel(username, imageUrl, description, userId);

    try {
      return await API.graphql(
        graphqlOperation(createPost, { input: post })
      );
    } catch (error) {
      Log.error(TAG, "Error creating post", error);
    }
  };

  public fetchAllPost = async (): Promise<PostModel[]> => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      const items = postData.data.listPosts.items;

      Log.info(TAG, `total post fetched: ${items.length}`);
      return items;
    } catch (error) {
      Log.error(TAG, "Error fetching all posts", error);
      return [];
    }
  };

  public fetchPostByUsername = async (username: string, limit: number = 20) => {
    try {
      const filter = {
        username: {
          eq: username,
        },
      };

      const variables = {
        limit: limit,
        filter: filter,
      };

      const postData = await API.graphql(
        graphqlOperation(listPosts, variables)
      );
      const items = postData.data.listPosts.items;

      Log.info(
        TAG,
        `total post fetched: ${items.length} for user: ${username}`
      );
      return items;
    } catch (error) {
      Log.error(TAG, `Error fetching post byUsername : ${username}`, error);
      return [];
    }
  };

  public likePost = async (post: PostModel) => {
    await this.clearPostLike(post);
    const currentUsername = await AuthenticatorService.getUsername();

    const currentPost = {
      id: post.id,
      likes: post.likes + 1,
      userLiked: JSON.stringify([ ...post.userLiked, currentUsername ]),
      userDisliked: JSON.stringify(this.getUserDisliked(post).filter(user => user != currentUsername)),
    }

    try {
      await API.graphql(
        graphqlOperation(updatePost, { input: currentPost })
      );
    }

    catch (error) {
      Log.error(TAG, "Error liking post", error);
    }
  }

  public disLikePost = async (post: PostModel) => {
    await this.clearPostLike(post);
    const currentUsername = await AuthenticatorService.getUsername();

    const currentPost = {
      id: post.id,
      dislikes: post.dislikes + 1,
      userDisliked: JSON.stringify([ ...post.userDisliked, currentUsername ]),
      userLiked: JSON.stringify(this.getUserDisliked(post).filter(user => user != currentUsername)),
    }

    try {
      await API.graphql(
        graphqlOperation(updatePost, { input: currentPost })
      );
    }

    catch (error) {
      Log.error(TAG, "Error liking post", error);
    }
  }

  public clearPostLike = async (post: PostModel) => {
    const currentUsername = await AuthenticatorService.getUsername();

    const currentPost = {
      id: post.id,
      userLiked: JSON.stringify(this.getUserLiked(post).filter(user => user != currentUsername)),
      userDisliked: JSON.stringify(this.getUserDisliked(post).filter(user => user != currentUsername)),
    } as PostModel;

    if (post.userLiked.includes(currentUsername)) {
      currentPost.dislikes = post.dislikes - 1;
    }

    if (post.userLiked.includes(currentUsername)) {
      currentPost.likes = post.likes - 1;
    }

    try {
      API.graphql(
        graphqlOperation(updatePost, { input: currentPost })
      );
    }

    catch (error) {
      Log.error(TAG, "Error liking post", error);
    }
  }

    private getUserLiked = (post: PostModel): string[] => {
      return JSON.parse(post.userLiked);
    }

    private getUserDisliked = (post: PostModel): string[] => {
      return JSON.parse(post.userDisliked);
    }

}

export default new PostService();
