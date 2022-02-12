import { format } from "date-fns";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Dropdown from "../UI/Dropdown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../../store/chart-slice";
import millify from "millify";

const Chart = ({ name, price, uuid }) => {
  const dispatch = useDispatch();

  const [timePeriod, setTimePeriod] = useState("24h");

  const getSelectedTimePeriod = (selTimePeriod) => {
    setTimePeriod(selTimePeriod);
  };

  useEffect(() => {
    dispatch(fetchHistory(uuid, timePeriod));
  }, [dispatch, uuid, timePeriod]);

  const change = useSelector((state) => state.chart.change);
  const priceHistory = useSelector((state) => state.chart.history);

  const labels = priceHistory.map((history) =>
    format(new Date(history.timestamp * 1000), "dd/MM/yyyy")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Price in USD",
        data: priceHistory.map((history) => history.price),
        backgroundColor: ["rgb(85, 126, 173)"],
        borderColor: ["rgb(8, 56, 168)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full">
      <Dropdown
        options={["24h", "3h", "7d", "30d", "3m", "1y", "3y", "5y"]}
        sendChangeToParent={getSelectedTimePeriod}
      />
      <div className="flex flex-row items-baseline">
        <p className="text-blue-600 font-semibold text-4xl">
          {name} Price Chart
        </p>
        <p className="ml-auto mr-6 font-bold text-lg">Change: {change}%</p>
        <p className="font-bold text-lg">
          Current {name} Price: $ {millify(price)}
        </p>
      </div>
      <Line className="grid place-items-center" data={data} />
    </div>
  );
};

export default Chart;
