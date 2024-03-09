import { connect, disconnect } from "mongoose";
export async function connectToDB() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error("Couldnot Connect to MongoDB");
  }
}
export async function disConnectToDB() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error("Couldnot disconnect to MongoDB");
  }
}
