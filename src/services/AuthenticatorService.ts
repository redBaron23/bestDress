import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser, updateUser } from "../graphql/mutations";
import { listUsers } from "../graphql/queries";
import User from "../model/User";
import { AuthenticatorInterface } from "../types/AuthenticatorInterface";
import Log from "../utils/Log";
import LogTags from "../utils/LogTags";

const TAG = LogTags.AUTHENTICATOR_SERVICE;

class AuthenticatorService implements AuthenticatorInterface {
  private username: string;
  private userId: string;

  constructor() {
    this.username = "";
    this.userId = "";
  }

  public initialize = async (): Promise<void> => {
    Auth.currentUserInfo().then((userInfo) => {
      this.username = userInfo.username;
      this.userId = userInfo.id;

      Log.info(TAG, `User info: ${JSON.stringify(userInfo)}`);
      // this.updateUserRecord();
    });

    // const caca = await API.graphql(graphqlOperation(listUsers));
    // Log.info(TAG, JSON.stringify(caca))
  };

  private getIdFromAuth(): Promise<string> {
    return Auth.currentUserInfo()
      .then((userInfo) => {
        return userInfo.id;
      })
      .catch((error) => {
        Log.error(TAG, "Error in Auth.currentUserInfo: ", error);
        return "";
      });
  }

  private getUsernameFromAuth(): Promise<string> {
    return Auth.currentUserInfo()
      .then((userInfo) => {
        Log.info(TAG, `Log in successfully welcome: ${userInfo.username}`);
        Log.info(TAG, `User info: ${JSON.stringify(userInfo)}`);

        return userInfo.username;
      })
      .catch((error) => {
        Log.error(TAG, "Error in Auth.currentUserInfo: ", error);
        return "";
      });
  }

  private updateUserRecord(): void {
    const currentUser = new User(this.username, "falopa");
    try {
      // console.log(`[TEST] currentUser ${JSON.stringify(currentUser)}`);
      //API.graphql(graphqlOperation(createUser, { input: currentUser }))
    } catch (error) {
      Log.error(TAG, "Error in update user record: ", error);
    }
  }

  public signOut = async () => {
    try {
      await Auth.signOut();
      Log.info(TAG, "Sign out successfully");
    } catch (error) {
      Log.error(TAG, "signing out:", error);
    }
  };

  public getUsername(): Promise<string> {
    if (!!this.username) {
      return Promise.resolve(this.username);
    }

    return this.getUsernameFromAuth().then((username) => {
      this.username = username;
      return username;
    });
  }

  public getUserId(): Promise<string> {
    if (!!this.username) {
      return Promise.resolve(this.username);
    }

    return this.getIdFromAuth().then((id) => {
      this.userId = id;
      return id;
    });
  }
}

export default new AuthenticatorService();
