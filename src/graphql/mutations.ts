/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      surname
      age
      followers
      likes
      dislikes
      profilePicture
      description
      location
      posts {
        items {
          id
          userID
          username
          description
          likes
          dislikes
          picture
          profilePicture
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      surname
      age
      followers
      likes
      dislikes
      profilePicture
      description
      location
      posts {
        items {
          id
          userID
          username
          description
          likes
          dislikes
          picture
          profilePicture
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      surname
      age
      followers
      likes
      dislikes
      profilePicture
      description
      location
      posts {
        items {
          id
          userID
          username
          description
          likes
          dislikes
          picture
          profilePicture
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      userID
      username
      description
      likes
      dislikes
      picture
      profilePicture
      user {
        id
        username
        name
        surname
        age
        followers
        likes
        dislikes
        profilePicture
        description
        location
        posts {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      comments {
        items {
          id
          postID
          content
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      userID
      username
      description
      likes
      dislikes
      picture
      profilePicture
      user {
        id
        username
        name
        surname
        age
        followers
        likes
        dislikes
        profilePicture
        description
        location
        posts {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      comments {
        items {
          id
          postID
          content
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      userID
      username
      description
      likes
      dislikes
      picture
      profilePicture
      user {
        id
        username
        name
        surname
        age
        followers
        likes
        dislikes
        profilePicture
        description
        location
        posts {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      comments {
        items {
          id
          postID
          content
          updatedAt
          createdAt
          owner
        }
        nextToken
      }
      updatedAt
      createdAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        user {
          id
          username
          name
          surname
          age
          followers
          likes
          dislikes
          profilePicture
          description
          location
          updatedAt
          createdAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      content
      updatedAt
      createdAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        user {
          id
          username
          name
          surname
          age
          followers
          likes
          dislikes
          profilePicture
          description
          location
          updatedAt
          createdAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      content
      updatedAt
      createdAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        user {
          id
          username
          name
          surname
          age
          followers
          likes
          dislikes
          profilePicture
          description
          location
          updatedAt
          createdAt
          owner
        }
        comments {
          nextToken
        }
        updatedAt
        createdAt
        owner
      }
      content
      updatedAt
      createdAt
      owner
    }
  }
`;
