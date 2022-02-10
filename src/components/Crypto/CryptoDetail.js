import Info from "../Details/Info";
import Links from "../Details/Links";
import OtherStats from "../Details/OtherStats";
import ValueStats from "../Details/ValueStats";
import Chart from "./Chart";
import LoadingSpinner from "../UI/LoadingSpinner";

const CryptoDetail = ({ coin }) => {
  if (coin === {}) return <LoadingSpinner />;

  return (
    <div className="divide-y divide-gray-400 pb-8">
      <div className="pb-8">
        <p className="grid place-items-center text-blue-600 font-bold text-4xl pt-6 pb-8">
          {coin.name} ({coin.symbol}) Price
        </p>
        <p className="grid place-items-center text-gray-900 font-normal text-lg">
          {coin.name} live price in US Dollar (USD). View value statistics,
          market cap and supply.
        </p>
      </div>
      <Chart />
      <div className="grid grid-cols-2">
        <ValueStats
          name={coin.name}
          price={coin.price}
          rank={coin.rank}
          volume24h={coin["24hVolume"]}
          marketCap={coin.marketCap}
          allTimeHigh={coin.allTimeHigh.price}
        />
        <OtherStats
          name={coin.name}
          marketsNumber={coin.numberOfMarkets}
          exchNumber={coin.numberOfExchanges}
          isSupplyApproved={coin.supply.confirmed}
          totalSupply={coin.supply.total}
          circSupply={coin.supply.circulating}
        />
        <Info name={coin.name} desc={coin.description}/>
        <Links name={coin.name} links={coin.links}/>
      </div>
    </div>
  );
};

export default CryptoDetail;
