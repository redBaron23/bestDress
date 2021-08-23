import { API, graphqlOperation } from 'aws-amplify'
import PostModel from '../components/Post/PostModel';
import { createUser, createPost } from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import User from '../model/User';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

const TAG = LogTags.POST_SERVICE

class PostService {

    public createPost = (post: PostModel) => {
        try {
            //console.log(`[TEST] going to create this post: ${JSON.stringify(post)}`);
            
            API.graphql(graphqlOperation(createPost, {input: post}))
        }
        catch (error) {
            Log.error(TAG, "Error creating post", error)
        }
    }

    public fetchAllPost = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            const items = postData.data.listPosts.items;

            Log.info(TAG,`total post fetched: ${items.length}`);
            return items;
        }
        catch (error) {
            Log.error(TAG, "Error fetching all posts", error)
            return [];
        }
    }

    public fetchPostByUsername = async (username:string, limit:number = 20) => {
        try {
            const filter = {
                username:{
                    eq:username
                }
            }

            const variables = {
                limit:limit,
                filter:filter
            }

            const postData = await API.graphql(graphqlOperation(listPosts,variables));
            const items = postData.data.listPosts.items;

            console.log(JSON.stringify(postData))
            Log.info(TAG,`total post fetched: ${items.length} for user: ${username}`);
            return items;
        }
        catch (error) {
            Log.error(TAG, `Error fetching post byUsername : ${username}`, error)
            return [];
        }
    }
}

export default new PostService();