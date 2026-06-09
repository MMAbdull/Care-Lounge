import app from "./app.js";
import { config } from "./config/env.js";
import { isDev } from "./config/env.helper.js";
import { connectDB } from "./db/mongo/connection.js";

const PORT = config.port;
const startServer = async () => {
await connectDB();


  app.listen(PORT, () => {
    if (isDev) {
      console.log(`🚀 Server running in DEVELOPMENT Mode on port ${PORT}`);
    } else {
      console.log(`Server running on port ${PORT}`)
    }
  });
};

startServer();