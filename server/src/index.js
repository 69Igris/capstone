import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import router from "./routes/auth.js";
import coursesRouter from "./routes/courses.js";
import enrollmentsRouter from "./routes/enrollments.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors(
  {
    origin :"*",
    methods : ["GET", "POST", "PUT", "DELETE"],
  }
));
app.use(express.json());

async function connectDB() {
  try {
    await prisma.$connect();
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Seekho Backend Running Successfully" });
});

app.use("/api/auth", router);
app.use("/api/courses", coursesRouter);
app.use("/api/enrollments", enrollmentsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
