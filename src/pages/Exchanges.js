import millify from "millify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { fethcExchanges } from "../store/exchanges-slice";

const Exchanges = () => {
  const isFetching = useSelector((state) => state.exchanges.isFetching);
  const exchanges = useSelector((state) => state.exchanges.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fethcExchanges());
  }, [dispatch]);

  if (isFetching)
    return <LoadingSpinner/>;

  return (
    <div className=" grid grid-rows-auto">
      <div className="grid grid-cols-3 lg:grid-cols-4 pb-4 font-semibold">
        <p className="pl-2">Exchanges</p>
        <p>24h Trade Volume (BTC)</p>
        <p className="hidden lg:inline">Established</p>
      </div>
      {exchanges.map((exchange) => (
        <div key={exchange.id} className="grid grid-cols-3 lg:grid-cols-4 items-center bg-gray-100 border-2 border-gray-300">
          <div className="py-4 pl-2 flex flex-row items-center">
            <p className="w-6 h-6 lg:w-8 lg:h-8 lg:mx-2">{exchange.trust_score_rank}.</p>
            <img
              className="w-6 h-6 mx-2 lg:w-8 lg:h-8 lg:mx-4"
              src={exchange.image}
              alt="coin logo"
            />
            <p className="text-sm lg:text-md">{exchange.name}</p>
          </div>
          <p className="py-4">{millify(exchange.trade_volume_24h_btc)}</p>
          <p className="py-4 hidden lg:inline">{exchange.year_established}</p>
          <a href={exchange.url} className="text-blue-400 py-4">Website</a>
        </div>
      ))}
    </div>
  );
};

export default Exchanges;
