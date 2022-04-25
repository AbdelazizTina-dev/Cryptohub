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
    setTimePeriod(selTimePeriod.value);
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
        borderWidth: 2,
      },
    ],
  };

  const periodOptions = [
    { value: "24h", label: "24h" },
    { value: "3h", label: "3h" },
    { value: "7d", label: "7d" },
    { value: "30d", label: "30d" },
    { value: "3m", label: "3m" },
    { value: "1y", label: "1y" },
    { value: "3y", label: "3y" },
    { value: "5y", label: "5y" },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <Dropdown
        options={periodOptions}
        sendChangeToParent={getSelectedTimePeriod}
      />
      <div className="flex flex-row items-baseline">
        <p className="text-blue-600 font-semibold text-2xl lg:text-4xl">
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
