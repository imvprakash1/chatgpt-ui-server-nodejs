import firebaseDB from "../DbConnection.js";

const Conversation = firebaseDB.collection("Conversations");

export default Conversation;
