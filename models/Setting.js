import firebaseDB from "../DbConnection.js";

const Setting = firebaseDB.collection("Settings");
const settingSchema = {
  name: String,
  value: String,
};

export { settingSchema };
export default Setting;
