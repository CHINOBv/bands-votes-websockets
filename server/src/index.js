// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require("./models/server");
require("dotenv").config();

const server = new Server();
server.execute();
