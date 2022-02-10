import { useSelector } from "react-redux";
import millify from "millify";

const GlobalCryptoStats = () => {
  const stats = useSelector((state) => state.coins.data.stats);
  
  return (
    <div>
      <p className="text-4xl font-semibold text-black pb-4">
        Global Crypto Stats
      </p>
      {stats !== undefined && (
        <div className="grid grid-cols-2 grid-rows-3 place-content-between gap-x-16 gap-y-8 pb-8">
          <div>
            <p className="text-gray-600">Total Cryptocurrencies:</p>
            <p className="text-xl font-medium text-black"> {stats.total} </p>
          </div>
          <div>
            <p className="text-gray-600">Total Exchanges:</p>
            <p className="text-xl font-medium text-black">
              {stats.totalExchanges}
            </p>
          </div>

          <div>
            <p className="text-gray-600">Total Market Cap:</p>
            <p className="text-xl font-medium text-black">
              ${millify(stats.totalMarketCap)}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Total 24h Volume:</p>
            <p className="text-xl font-medium text-black">
              ${millify(stats.total24hVolume)}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Total Markets:</p>
            <p className="text-xl font-medium text-black">
              {stats.totalMarkets}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalCryptoStats;
