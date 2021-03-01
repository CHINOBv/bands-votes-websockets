import { useEffect, useState } from "react";

import { io } from "socket.io-client";

import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";

let uri = "http://localhost:8080";

const connectSocketServer = () => {
  const socket = io(uri, {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  const [socket] = useState(() => connectSocketServer());
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  return (
    <>
      <div className="container mt-4">
        <div className="alert">
          <p>
            Service Status:{" "}
            {online ? (
              <span className="text-success">Online</span>
            ) : (
              <span className="text-danger">Offline</span>
            )}
          </p>
        </div>
        <h1 className="text-center">Bands</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <BandList data={bands} />
          </div>
          <div className="col-4">
            <BandAdd />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
