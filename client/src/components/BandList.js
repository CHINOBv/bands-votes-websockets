const BandList = () => {
  const BandRow = ({ name, votes }) => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary">+ 1</button>
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
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
        <tbody>
          <BandRow />
        </tbody>
      </table>
    </>
  );
};

export default BandList;
