import Users from "./User.js";
import { userSchema } from "./User.js";

class User {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = Date.now();
    console.log(typeof this.createdAt);
    // this.firstName = data.firstName;
    // this.firstName = data.firstName;
  }

  async save() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
    };
    if (this.validateAgainstSchema(user, userSchema)) {
      await Users.add(user);
    } else {
      return { error: "Some error occured" };
    }
  }
  validateAgainstSchema(data, schema) {
    // Ensure all required fields in schema are present
    for (let field of Object.keys(schema)) {
      console.log(field, data);
      if (!data.hasOwnProperty(field)) {
        throw new Error(`Missing required field ${field}`);
      }
    }

    // Validate types
    for (let field in schema) {
      let value = data[field];
      let type = schema[field];

      if (typeof value !== type) {
        throw new Error(`Invalid type for ${field} - expected ${type}`);
      }
    }

    return true;
  }
}

export default User;
