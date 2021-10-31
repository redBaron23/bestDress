import { API, graphqlOperation } from "aws-amplify";
import PostModel from "../components/Post/PostModel";
import { createUser, createPost } from "../graphql/mutations";
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

  public createPost = async (imageUri: string, description: string) => {
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
      console.log(`[TEST] going to create this post: ${JSON.stringify(post)}`);
      const caca = await API.graphql(
        graphqlOperation(createPost, { input: post })
      );
      console.log(caca);
    } catch (error) {
      Log.error(TAG, "Error creating post", error);
    }
  };

  public fetchAllPost = async () => {
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
}

export default new PostService();
