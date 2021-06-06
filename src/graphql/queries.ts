/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          updatedAt
          createdAt
          owner
        }
        content
        updatedAt
        createdAt
        owner
      }
      nextToken
    }
  }
`;
