import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowDown,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import millify from "millify";

const OtherStats = ({name, marketsNumber, exchNumber, isSupplyApproved, totalSupply, circSupply}) => {
  return (
    <div className="p-6">
      <p className="text-blue-600 font-semibold text-2xl pb-4">
        Other Stats Info
      </p>
      <p className="w-full pb-6">
        An overview showing the statistics of {name}, such as the base and
        quote currency, the rank, and trading volume.
      </p>
      <ul className="divide-y divide-gray-300">
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faChartLine}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Number of Markets</p>
          <p className="ml-auto pr-3 font-bold">{marketsNumber}</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Number of Exchanges</p>
          <p className="ml-auto pr-3 font-bold">{exchNumber}</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Approved Supply</p>
          <p className="ml-auto pr-3 font-bold">{isSupplyApproved ? "✔" : "X"}</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Total Supply</p>
          <p className="ml-auto pr-3 font-bold">$ {millify(totalSupply,{precision:2})}</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Circulating Supply</p>
          <p className="ml-auto pr-3 font-bold">$ {millify(circSupply,{precision:2})}</p>
        </li>
      </ul>
    </div>
  );
};

export default OtherStats;
