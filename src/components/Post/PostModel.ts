export default class PostModel {
    constructor(
        public username: string,
        public picture?: string,
        public description?: string,
        public userID?: string,
        public profilePicture: string = "not image",
        public id?: number,
        public likes: number = 0,
        public dislikes: number = 0,
      ) {}
}