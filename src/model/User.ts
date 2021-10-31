export default class User {
    constructor(
        public id?: string,
        public username: string = "username PLACEHOLDER",
        public name: string = "name PLACEHOLDER",
        public surname: string = "surname PLACEHOLDER",
        public age: number = 24,
        public followers: number = 0,
        public likes: number = 0,
        public dislikes: number = 0,
        public profilePicture: string = "",
        public description: string = "description PLACEHOLDER",
        public location: string = "location PLACEHOLDER",
      ) {}
}