import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser, updateUser } from "../graphql/mutations";
import { listUsers } from "../graphql/queries";
import User from "../model/User";
import { AuthenticatorInterface } from "../types/AuthenticatorInterface";
import Log from "../utils/Log";
import LogTags from "../utils/LogTags";
import UserService from "./UserService";

const TAG = LogTags.AUTHENTICATOR_SERVICE;

class AuthenticatorService implements AuthenticatorInterface {
  private username: string;
  private userId: string;

  constructor() {
    this.username = "";
    this.userId = "";
  }

  public initialize = async (): Promise<void> => {
    try {
      const userInfo = await Auth.currentUserInfo()
      this.username = userInfo.username;
      this.userId = userInfo.id;

      Log.info(TAG, `User info: ${JSON.stringify(userInfo)}`);
      if (!await UserService.isUserExist(this.username)) {
        this.createUserRecord();
      }
    }
    catch(e) {
      Log.error(TAG, "Error in initialize: ", e);
    }
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

  private async createUserRecord(): Promise<void> {
    const userId = await this.getUserId();

    const currentUser = new User(userId, this.username);
    try {
      console.log(TAG, "Create new user", this.username);
      API.graphql(graphqlOperation(createUser, { input: currentUser }))
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
