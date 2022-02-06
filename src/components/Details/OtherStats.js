import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowDown,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const OtherStats = () => {
  return (
    <div className="p-6">
      <p className="text-blue-600 font-semibold text-2xl pb-4">
        Bitcoin value statistics
      </p>
      <p className="w-full pb-6">
        An overview showing the statistics of Bitcoin, such as the base and
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
          <p>Price in USD</p>
          <p className="ml-auto pr-3 font-bold">$ 41.7K</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Rank</p>
          <p className="ml-auto pr-3 font-bold">1</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>24h Volume</p>
          <p className="ml-auto pr-3 font-bold">$ 790.5B</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>Market Cap</p>
          <p className="ml-auto pr-3 font-bold">$ 790.5B</p>
        </li>
        <li className="flex flex-row items-center px-4 py-6 hover:bg-gray-100">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="mr-4"
            size="lg"
            fixedWidth
          />
          <p>All-time-high (daily avg.)</p>
          <p className="ml-auto pr-3 font-bold">$ 68.8K</p>
        </li>
      </ul>
    </div>
  );
};

export default OtherStats;
