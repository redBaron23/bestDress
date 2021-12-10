class Comment {
    constructor(
        public postID: string,
        public content: string,
        public profilePicture?: string,
        public username?: string,
        public likes: number = 0,
        public dislikes: number = 0,
        public userLiked: string = "[]",
        public userDisliked: string = "[]",
        public id?: string | null
    ) { }
}

export default Comment;