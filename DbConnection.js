import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseDB = admin.firestore();

export default firebaseDB;
