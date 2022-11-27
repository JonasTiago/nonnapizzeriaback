import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { watch } from "fs/promises";

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("nonnaPizzeria");
