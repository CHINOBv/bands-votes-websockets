import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";

function App() {
  return (
    <>
      <div className="container mt-4">
        <div className="alert">
          <p>
            Service Status: <span className="text-success">Online</span>
            <span className="text-danger">Online</span>
          </p>
        </div>
        <h1 className="text-center">Bands</h1>
        <hr />
        <div className="row">
          <div className="col-8">
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
