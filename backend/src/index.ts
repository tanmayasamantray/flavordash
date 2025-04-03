import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI as string).then(() =>{
    console.log("✅ Connected to MongoDB")
})

const port = process.env.PORT || 8000
const app = express();
app.use(express.json())
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

app.listen(8000, () =>{
    console.log(`🚀 Server is running on port ${port}`);
});

//timestamp: 01:26