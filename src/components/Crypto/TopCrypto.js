import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CryptoItem from "./CryptoItem";

const TopCrypto = () => {
  const coins = useSelector((state) => state.coins.data.coins);

  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <p className="text-2xl lg:text-4xl font-semibold text-black py-4">
          Top 10 Cryptocurrencies in the world
        </p>
        <Link to="/crypto" className="text-xl lg:text-2xl font-semibold py-4 text-blue-600">
          Show More
        </Link>
      </div>
      {coins !== undefined && (
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-6">
          {coins.slice(0, 10).map((i) => (
            <CryptoItem
              key={i.uuid}
              uuid={i.uuid}
              rank={i.rank}
              name={i.name}
              price={i.price}
              mCap={i.marketCap}
              dChange={i.change}
              iconUrl={i.iconUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCrypto;
