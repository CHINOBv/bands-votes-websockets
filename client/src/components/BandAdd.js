import { useContext, useState } from "react";
import { SocketConext } from "../context/SocketContext";

const BandAdd = () => {
  const [name, setName] = useState("");

  const { socket } = useContext(SocketConext);

  const saveNewBand = (e) => {
    e.preventDefault();
    if (name.trim().length <= 0) return;
    socket.emit("new-band", { name });
    setName("");
  };

  return (
    <div>
      <h3>Add Band</h3>
      <form onSubmit={(e) => saveNewBand(e)}>
        <input
          type="text"
          className="form-control"
          placeholder="Name Of New Band"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BandAdd;
