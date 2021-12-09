import { API, graphqlOperation } from 'aws-amplify'
import PostModel from '../components/Post/PostModel';
import { updateUser } from '../graphql/mutations';
import { getUser, userByUSERNAME } from '../graphql/queries';
import User from '../model/User';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

const TAG = LogTags.USER_SERVICE

class UserService {
    public getUser = async (username: string) => {
        try {
            const result = await API.graphql(graphqlOperation(userByUSERNAME, { username }));
            const arrayResult = result.data.userByUSERNAME.items;

            Log.info(TAG, `total user fetched: ${arrayResult.length} data: ${JSON.stringify(arrayResult[0])}`);
            return arrayResult[0];
        }
        catch (error) {
            Log.error(TAG, `Error user ${username}`, error)
            return null;
        }
    }

    public editUser = async (user: User) => {
        try {
            const result = await API.graphql(graphqlOperation(updateUser, {
                input: {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    age: user.age,
                    profilePicture: user.profilePicture,
                    location: user.location,
                    description: user.description,
                }
            }));
            Log.info(TAG, `user ${user.username} updated`);
            return result;
        }
        catch (error) {
            Log.error(TAG, `Error user ${user.username}`, error)
            return null;
        }
    }

    public isUserExist = async (username: string): Promise<boolean> => {
        return this.getUser(username)
            .then(user => !!user)
    }

    public async getProfilePicture (username: string): Promise<string> {
        const user = await this.getUser(username);
        return user.profilePicture;
    }
}

export default new UserService();