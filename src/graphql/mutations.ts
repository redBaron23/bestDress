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
      category
      updatedAt
      createdAt
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
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      category
      updatedAt
      createdAt
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
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      category
      updatedAt
      createdAt
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
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      updatedAt
      userLiked
      userDisliked
      createdAt
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
        category
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          updatedAt
          likes
          dislikes
          username
          profilePicture
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      updatedAt
      userLiked
      userDisliked
      createdAt
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
        category
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          updatedAt
          likes
          dislikes
          username
          profilePicture
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      updatedAt
      userLiked
      userDisliked
      createdAt
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
        category
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          updatedAt
          likes
          dislikes
          username
          profilePicture
          userLiked
          userDisliked
          createdAt
          owner
        }
        nextToken
      }
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
      content
      updatedAt
      likes
      dislikes
      username
      profilePicture
      userLiked
      userDisliked
      createdAt
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        updatedAt
        userLiked
        userDisliked
        createdAt
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
          category
          updatedAt
          createdAt
        }
        owner
        comments {
          nextToken
        }
      }
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
      content
      updatedAt
      likes
      dislikes
      username
      profilePicture
      userLiked
      userDisliked
      createdAt
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        updatedAt
        userLiked
        userDisliked
        createdAt
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
          category
          updatedAt
          createdAt
        }
        owner
        comments {
          nextToken
        }
      }
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
      content
      updatedAt
      likes
      dislikes
      username
      profilePicture
      userLiked
      userDisliked
      createdAt
      post {
        id
        userID
        username
        description
        likes
        dislikes
        picture
        profilePicture
        updatedAt
        userLiked
        userDisliked
        createdAt
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
          category
          updatedAt
          createdAt
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
