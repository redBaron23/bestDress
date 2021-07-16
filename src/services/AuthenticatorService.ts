import { Auth } from 'aws-amplify';
import { AuthenticatorInterface } from '../types/AuthenticatorInterface';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';

class AuthenticatorService implements AuthenticatorInterface {

    private TAG = LogTags.AUTHENTICATOR_SERVICE;
    private username: string;

    constructor() {
        this.username = ""
    }

    public initialize = (): void => {
        Auth.currentUserInfo()
            .then(userInfo => this.username = userInfo.username)
            .catch(error => Log.error(this.TAG, "Error in Auth.currentUserInfo: ", error))
            .finally(() => Log.info(this.TAG, `End loading username: ${this.username}`))
    }

    public signUp = () => {
        const username = "cracker2";
        const password = "SEGa1122__"
        const email = "fafa2@gmail.com"
        return Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                // other custom attributes 
            }
        })
            .then(user => console.log(`${TAG} signUp ${JSON.stringify(user)}`))
            .catch(error => console.log('error signing up:', error));

    }

    public signIn = () => {
        const username = "cracker2";
        const password = "SEGa1122__"
        const email = "fafa2@gmail.com"
        return Auth.signIn(username, password)
            .then(user => console.log("{user} ", user))
            .catch(e => console.log('error signing in', e));
    }

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