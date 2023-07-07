const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log("Data received from client: ", data.toString());
    socket.write("Data received: " + data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.log("Client connection error: ", err);
  });
});

server.listen(42333, () => {
  console.log("Server is listening on port 1234");
});
