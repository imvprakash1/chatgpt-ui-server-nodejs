import firebaseDB from "../DbConnection.js";

const Prompt = firebaseDB.collection("Prompts");

export default Prompt;
