import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function connection(): Promise<void> {
  dotenv.config();
  mongoose
    .connect(process.env.DB_CONNECTION!, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch((err: any) => console.log(err));
}
