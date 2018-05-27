export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  constructor(id: number, firstName: string, lastname: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastname;
    this.email = email;
  }
}
