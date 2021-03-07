import { useContext } from "react";

import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import GraphVotes from "./components/GraphVotes";

import { SocketConext } from "./context/SocketContext";

function App() {
  const { online } = useContext(SocketConext);

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
            <GraphVotes />
            <BandList />
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
