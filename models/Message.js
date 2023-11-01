import firebaseDB from "../DbConnection.js";

const Message = firebaseDB.collection("Messages");
const messageSchema = {
  id: String,
  conversationId: String,
  userId: String,
  text: String,
  embeddingId: String,
  type: Number,
  createdAt: Number,
};
export default Message;
