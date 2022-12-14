import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("nonnaPizzeria");

export const productCollection = db.collection("products");
export const saleCollection = db.collection("sale");
export const sessionsCollection = db.collection("session");
