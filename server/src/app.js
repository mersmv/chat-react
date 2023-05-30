const express = require("express");
const app = express();

const { Server } = require("socket.io");
const server = require("http").Server(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type, Authorization"],
  },
});
io.on("connection", (socket) => {
  console.log("Cliente Conectado");
  io.emit("test", "HOLA");
  socket.on("test2", (message) => {
    console.log("Mensaje recibido:");
    socket.emit("messageToClient", message);
  });

  socket.on("disconnected", () => {
    console.log("Cliente desconectado");
  });
});

app.use(express.json());
server.listen(4000, () => {
  console.log("Socket io runed");
});

app.listen(3000, () => console.log("Servidor en ejecución en el puerto 3000"));
