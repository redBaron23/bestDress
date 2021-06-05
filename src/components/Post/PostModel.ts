export default class PostModel {
    constructor(
        public username: string,
        public likes: number,
        public dislikes: number,
        public picture?: string,
        public description?: string,
        public profilePicture?: string,
      ) {}
}