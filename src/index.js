import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouters from "./routes/authRoutes.js"
import productsRouter from "./routes/productsRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouters);
app.use(productsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port:${port}`));
