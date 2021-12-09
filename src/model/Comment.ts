class Comment {
    constructor(
        public postID: string,
        public content: string,
        public likes: number = 0,
        public dislikes: number = 0,
        public id?: string | null
    ) { }
}

export default Comment;