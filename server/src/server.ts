import app from "./app.js";
import { config } from "./config/env.js";
import { isDev } from "./config/env.helper.js";

const PORT = config.port;

app.listen(PORT, () => {
 if(isDev){
  console.log(`🚀 Server running in DEVELOPMENT Mode on port ${PORT}`);
 }else {
  console.log(`Server running on port ${PORT}`)
 }
});