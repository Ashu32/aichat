import app from "./app.js";
import { connectToDB } from "./db/connection.js";

//connections and listeners
connectToDB()
  .then(() => {
    app.listen(5000, () => console.log("DB connected and server running"));
  })
  .catch((err) => console.log(err));
