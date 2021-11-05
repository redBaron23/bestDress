/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
