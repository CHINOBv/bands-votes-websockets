const BandList = require("./bands-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Connected");
      socket.emit("current-bands", this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
