import OtherStats from "../Details/OtherStats";
import ValueStats from "../Details/ValueStats";

const CryptoDetail = (props) => {
  return (
    <div className="divide-y divide-gray-400 pb-8">
      <div className="pb-8">
        <p className="grid place-items-center text-blue-600 font-bold text-4xl pt-6 pb-8">
          Bitcoin (BTC) Price
        </p>
        <p className="grid place-items-center text-gray-900 font-normal text-lg">
          Bitcoin live price in US Dollar (USD). View value statistics, market
          cap and supply.
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        <ValueStats/>
        <OtherStats/>
      </div>
    </div>
  );
};

export default CryptoDetail;
