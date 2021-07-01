"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem'),
// };
const server = new server_1.Server().app;
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server is running ${port}`);
});
