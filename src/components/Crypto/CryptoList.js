import CryptoItem from "./CryptoItem";
import Search from "../UI/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { coinsActions } from "../../store/coins-slice";

const CryptoList = () => {
  const dispatch = useDispatch();

  const filteredCoins = useSelector((state) => state.coins.filteredData);

  const getSearchedText = (text) => {
    dispatch(coinsActions.filterByName(text));
  };

  return (
    <div>
      <div className="pb-4">
        <Search onTyping={getSearchedText} />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filteredCoins.map((i) => (
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
    </div>
  );
};

export default CryptoList;
