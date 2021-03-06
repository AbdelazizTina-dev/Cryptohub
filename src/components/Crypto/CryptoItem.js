import millify from "millify";
import { useNavigate } from "react-router-dom";

const CryptoItem = ({ uuid, rank, name, price, mCap, dChange, iconUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/crypto/${uuid}`);
      }}
      className="bg-white hover:cursor-pointer divide-y divide-gray-200 transition-all duration-700 ease-out hover:shadow-2xl"
    >
      <div className="flex justify-between items-center p-4 ">
        <p className="text-lg font-medium">
          {rank}. {name}
        </p>
        <img className="w-8 h-8" src={iconUrl} alt="coin logo" />
      </div>

      <div className="p-6 text-lg text-gray-800">
        <p className="pb-4">
          Price: ${" "}
          {millify(price, {
            precision: 2,
            decimalSeparator: ".",
          })}
        </p>
        <p className="pb-4">Market Cap: $ {millify(mCap)}</p>
        <p>Daily Change: {dChange}%</p>
      </div>
    </div>
  );
};

export default CryptoItem;
