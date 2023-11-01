import firebaseDB from "../DbConnection.js";

const EmbeddingDocument = firebaseDB.collection("EmbeddingDocuments");
const embeddingDocumentSchema = {
  id: String,
  userId: String,
  faissStore: Buffer,
  title: string,
  createdAt: Number,
};

export { embeddingDocumentSchema };
export default EmbeddingDocument;
