import { useState } from "react";

const BandAdd = ({ createBand }) => {
  const [name, setName] = useState("");
  const saveNewBand = (e) => {
    e.preventDefault();
    if (name.trim().length <= 0) return;
    createBand(name);
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
