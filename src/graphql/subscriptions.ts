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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
