import { API, graphqlOperation } from 'aws-amplify'
import PostModel from '../components/Post/PostModel';
import { createUser, createPost } from '../graphql/mutations';
import { getUser, userByUSERNAME } from '../graphql/queries';
import User from '../model/User';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

const TAG = LogTags.USER_SERVICE

class UserService {

    public getUser = async (username:string) => {
        try {
            const result = await API.graphql(graphqlOperation(userByUSERNAME,{username}));
            const arrayResult = result.data.userByUSERNAME.items;

            Log.info(TAG,`total user fetched: ${arrayResult.length}`);
            return arrayResult[0];
        }
        catch (error) {
            Log.error(TAG, `Error user ${username}`, error)
            return null;
        }
    }

}

export default new UserService();