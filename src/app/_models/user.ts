export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    fullName = function () {
        return this.firstName + ' ' + this.lastName;
      };
}
