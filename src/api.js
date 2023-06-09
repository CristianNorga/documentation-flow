import { app } from "./api/app.js";
import { createConnection } from "./api/database.js";

createConnection();
app.listen(app.get("port"));
console.log(`Server on port http://localhost:${app.get("port")}/`);
