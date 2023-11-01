import firebaseDB from "../DbConnection.js";

const Users = firebaseDB.collection("Users");
const userSchema = {
  firstName: "string",
  lastName: "string",
  email: "string",
  password: "string",
  createdAt: "number",
};

export { userSchema };
export default Users;
