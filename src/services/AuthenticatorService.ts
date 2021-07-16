import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createUser, updateUser } from '../graphql/mutations';
import { listUsers } from '../graphql/queries';
import User from '../model/User';
import { AuthenticatorInterface } from '../types/AuthenticatorInterface';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

class AuthenticatorService implements AuthenticatorInterface {

    private TAG = LogTags.AUTHENTICATOR_SERVICE;
    private username: string;

    constructor() {
        this.username = ""
    }

    public initialize = async (): Promise<void> => {
        this.username = await this.getUsernameFromAuth();
        this.updateUserRecord();

        const caca = await API.graphql(graphqlOperation(listUsers));
        console.log(`[TEST] JSON.stringify(caca) ${JSON.stringify(caca)}`);
        

    }

    private getUsernameFromAuth(): Promise<string> {
        return Auth.currentUserInfo()
            .then(userInfo => {
                Log.info(this.TAG, `Log in successfully welcome: ${userInfo.username}`);
                return userInfo.username;
            })
            .catch(error => {
                Log.error(this.TAG, "Error in Auth.currentUserInfo: ", error);
                return "";
            });
    }

    private updateUserRecord(): void {
        const currentUser = new User(this.username,"falopa")
        try{
            API.graphql(graphqlOperation(updateUser, {input: currentUser}))

        }
        catch(error) {
            Log.error(this.TAG, "Error in update user record: ", error);
        }
    }

    // public signUp = () => {
    //     const username = "cracker2";
    //     const password = "SEGa1122__"
    //     const email = "fafa2@gmail.com"
    //     return Auth.signUp({
    //         username,
    //         password,
    //         attributes: {
    //             email,          // optional
    //             // other custom attributes 
    //         }
    //     })
    //         .then(user => console.log(`${TAG} signUp ${JSON.stringify(user)}`))
    //         .catch(error => console.log('error signing up:', error));

    // }

    // public signIn = () => {
    //     const username = "cracker2";
    //     const password = "SEGa1122__"
    //     const email = "fafa2@gmail.com"
    //     return Auth.signIn(username, password)
    //         .then(user => console.log("{user} ", user))
    //         .catch(e => console.log('error signing in', e));
    // }

    public signOut = async () => {
        try {
            await Auth.signOut();
            Log.info(this.TAG, "Sign out successfully");
        } catch (error) {
            Log.error(this.TAG, "signing out:", error);
        }
    }

    public getUsername(): string {
        return this.username;
    }
}

export default new AuthenticatorService();