/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  surname: string,
  age: number,
  followers: number,
  likes: number,
  dislikes: number,
  profilePicture: string,
  description?: string | null,
  location: string,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  age?: ModelIntInput | null,
  followers?: ModelIntInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  profilePicture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  name: string,
  surname: string,
  age: number,
  followers: number,
  likes: number,
  dislikes: number,
  profilePicture: string,
  description?: string | null,
  location: string,
  posts?: ModelPostConnection | null,
  updatedAt: string,
  createdAt: string,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  userID: string,
  username: string,
  description?: string | null,
  likes: number,
  dislikes: number,
  picture: string,
  profilePicture: string,
  user?: User | null,
  comments?: ModelCommentConnection | null,
  updatedAt: string,
  createdAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  post?: Post | null,
  content: string,
  updatedAt: string,
  createdAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  surname?: string | null,
  age?: number | null,
  followers?: number | null,
  likes?: number | null,
  dislikes?: number | null,
  profilePicture?: string | null,
  description?: string | null,
  location?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  userID: string,
  username: string,
  description?: string | null,
  likes: number,
  dislikes: number,
  picture: string,
  profilePicture: string,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  userID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  picture?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  userID?: string | null,
  username?: string | null,
  description?: string | null,
  likes?: number | null,
  dislikes?: number | null,
  picture?: string | null,
  profilePicture?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
  updatedAt?: string | null,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
  updatedAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  age?: ModelIntInput | null,
  followers?: ModelIntInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  profilePicture?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  description?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  picture?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      content: string,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    surname: string,
    age: number,
    followers: number,
    likes: number,
    dislikes: number,
    profilePicture: string,
    description?: string | null,
    location: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        username: string,
        description?: string | null,
        likes: number,
        dislikes: number,
        picture: string,
        profilePicture: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    username: string,
    description?: string | null,
    likes: number,
    dislikes: number,
    picture: string,
    profilePicture: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      surname: string,
      age: number,
      followers: number,
      likes: number,
      dislikes: number,
      profilePicture: string,
      description?: string | null,
      location: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      username: string,
      description?: string | null,
      likes: number,
      dislikes: number,
      picture: string,
      profilePicture: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        surname: string,
        age: number,
        followers: number,
        likes: number,
        dislikes: number,
        profilePicture: string,
        description?: string | null,
        location: string,
        updatedAt: string,
        createdAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
      owner?: string | null,
    } | null,
    content: string,
    updatedAt: string,
    createdAt: string,
    owner?: string | null,
  } | null,
};
