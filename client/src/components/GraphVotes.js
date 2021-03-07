import { Chart } from "chart.js";
import { useContext, useEffect } from "react";
import { SocketConext } from "../context/SocketContext";
const GraphVotes = () => {
  const { socket } = useContext(SocketConext);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      console.log(bands);
      createGraph(bands);
    });
  }, [socket]);

  const createGraph = (bands = []) => {
    let ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.votes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    });
  };

  return (
    <div>
      <h1>Votes</h1>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default GraphVotes;
