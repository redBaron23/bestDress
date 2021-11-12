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
        category
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const userByUSERNAME = /* GraphQL */ `
  query UserByUSERNAME(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUSERNAME(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        category
        updatedAt
        createdAt
        posts {
          nextToken
        }
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
          createdAt
          owner
        }
        nextToken
      }
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      updatedAt
      likes
      dislikes
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
        content
        updatedAt
        likes
        dislikes
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
