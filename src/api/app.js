import express from "express";
// import morgan from "morgan";
// import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";

import componentsRoutes from "./routes/components.js";

const app = express();

app.set("port", process.env.PORT || 3000);

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Draw Flow API",
//       version: "1.0.0",
//       description: "Draw Flow API Information",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   apis: ["./src/routes/*.js"],
// };
// const specs = swaggerJsDoc(options);

app.use(express.json());
  // app.use(morgan("dev"));
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(componentsRoutes);

export { app };
