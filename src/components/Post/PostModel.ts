export default class PostModel {
    constructor(
        public username: string,
        public userID: string,
        public likes: number = 0,
        public dislikes: number = 0,
        public picture?: string,
        public description?: string,
        public profilePicture?: string,
        public id?: number,
      ) {}
}