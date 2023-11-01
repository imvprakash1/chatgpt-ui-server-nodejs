import Users from "./User.js";
import { userSchema } from "./User.js";

class User {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = data.password;
    this.createdAt = Date.now();
    this.verified = false;
  }

  async save() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      verified: this.verified,
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
  async verifyEmail() {
    const userRef = await Users.where("email", "==", this.email).get();

    if (userRef.empty) {
      throw new Error("User not found");
    }

    const userDoc = userRef.docs[0];

    // Update verified status
    await userDoc.ref.update({
      verified: true,
    });
  }
}

export default User;
