import { API, graphqlOperation } from 'aws-amplify'
import PostModel from '../components/Post/PostModel';
import { createUser, createPost } from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

class PostService {

    private TAG = LogTags.POST_SERVICE

    public createPost = (post: PostModel) => {
        try {
            API.graphql(graphqlOperation(createPost, post))
        }
        catch (error) {
            Log.error(this.TAG, "Error creating post", error)
        }
    }

    public fetchAllPost = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            console.log("[TEST] fetch", postData);
            return postData
        }
        catch (error) {
            Log.error(this.TAG, "Error fetching all posts", error)
            return [];
        }
    }
}

export default new PostService();