import API from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import { createComment, deleteComment, updateComment } from "../graphql/mutations";
import { listComments } from "../graphql/queries";
import Comment from '../model/Comment';
import Log from '../utils/Log';
import LogTags from '../utils/LogTags';
import AuthenticatorService from './AuthenticatorService';
import UserService from './UserService';

const TAG = LogTags.COMMENET_SERVICE;

class CommentService {
    public async createComment(comment: Comment): Promise<any> {
        comment.username = await AuthenticatorService.getUsername();
        comment.profilePicture = await UserService.getProfilePicture(comment.username);
        try {
            Log.info(TAG, `createComment ${JSON.stringify(comment)}`);

            return await API.graphql(
                graphqlOperation(createComment, { input: comment })
            ).data.createComment;

        } catch (err) {
            Log.error(TAG, 'createComment', err);
            return null;
        }
    }

    public async deleteComment(commentId: string): Promise<any> {
        try {
            return await API.graphql(
                graphqlOperation(deleteComment, { input: commentId })
            );

        } catch (err) {
            Log.error(TAG, 'deleteComment', err);
            return null;
        }
    }

    public async updateComment(comment: Comment): Promise<any> {
        try {
            return await API.graphql(
                graphqlOperation(updateComment, { input: comment })
            );
        }

        catch (err) {
            Log.error(TAG, 'updateComment', err);
            return null;
        }
    }

    public async getComments(postId: number): Promise<Comment[]> {
        try {
            const filter = {
                postID: {
                    eq: postId,
                },
            };

            const variables = {
                filter: filter,
            };

            const commentData = await API.graphql(
                graphqlOperation(listComments, variables)
            );
            const items = commentData.data.listComments.items;

            Log.info(
                TAG,
                `total comments fetched: ${items.length} for user: ${postId}`
            );

            return items;
        } catch (error) {
            Log.error(TAG, `Error fetching comments by postId : ${postId}`, error);
            return [];
        }
    }
}

export default new CommentService();