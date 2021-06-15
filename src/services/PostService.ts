import { API, graphqlOperation } from 'aws-amplify'
import PostModel from '../components/Post/PostModel';
import { createUser,createPost } from '../graphql/mutations';
import { listPosts } from '../graphql/queries';


class PostService {
    
    public createPost = (post:PostModel) => {
        API.graphql(graphqlOperation(createPost,post))
    }

    public fetchAllPost = async () => {
        try{
            const postData = await API.graphql(graphqlOperation(listPosts));
            console.log("[TEST] fetch",postData);
            return postData
        }
        catch(e) {
            console.log("[ERROR]",e);
            return [];
        } 
    }
}

export default new PostService();