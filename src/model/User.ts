export default class User {
    constructor(
        public username: string,
        public name: string,
        public surname: string,
        public age: number,
        public followers: number,
        public likes: number,
        public dislikes: number,
        public profilePicture: string,
        public description: string,
        public location: string,
      ) {}
}