import CryptoItem from "./CryptoItem";
import Search from "../UI/Search";
import { useSelector } from "react-redux";

const CryptoList = () => {
  const coins = useSelector((state) => state.coins.data.coins);

  return (
    <div>
      <div className="pb-4">
        <Search />
      </div>
      {coins !== undefined && (
        <div className="grid grid-cols-4 gap-6">
          {coins.map((i) => (
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

export default CryptoList;
