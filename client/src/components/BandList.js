import { useEffect, useState } from "react";

const BandList = ({ data, increaseVotes, removeBand, saveNewName }) => {
  const [bands, setBands] = useState([...data]);

  useEffect(() => {
    setBands(data);
    console.log(data);
  }, [data]);

  const renameBand = (e, id) => {
    const newName = e.target.value;

    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };

  const BandRow = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => increaseVotes(band.id)}
          >
            + 1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(e) => renameBand(e, band.id)}
            onBlur={() => saveNewName(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => removeBand(band.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>Current Bands</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{BandRow()}</tbody>
      </table>
    </>
  );
};

export default BandList;
