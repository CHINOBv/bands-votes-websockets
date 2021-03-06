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
      socket.on("increase-votes", (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });
      socket.on("remove-band", (id) => {
        this.bandList.removeBand(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });
      socket.on("rename", (data) => {
        this.bandList.changeBandName(...data);
        this.io.emit("current-bands", this.bandList.getBands());
      });
      socket.on("new-band", ({ name }) => {
        this.bandList.addBand(name);
        this.io.emit("current-bands", this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
