import { Auth } from 'aws-amplify';

const TAG = "AuthenticatorService";

class AuthenticatorService {

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
        .then(user => console.log("{user} ",user))
        .catch(e => console.log('error signing in', e));
    }

    public signOut = async() => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log(`${TAG} error signing out: ${JSON.stringify(error)}`);
            
        }
    }
}

export default new AuthenticatorService();