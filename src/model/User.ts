export default class User {
    constructor(
        public username: string,
        public name: string = "",
        public surname: string = "",
        public age: number = 24,
        public followers: number = 0,
        public likes: number = 0,
        public dislikes: number = 0,
        public profilePicture: string = "",
        public description: string = "",
        public location: string = "",
      ) {}
}