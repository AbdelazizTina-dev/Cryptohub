import { Link } from "react-router-dom";
import CryptoItem from "./CryptoItem";

const TopCrypto = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-4">
        <p className="text-4xl font-semibold text-black pb-4">
          Top 10 Cryptocurrencies in the world
        </p>
        <Link to="/crypto" className="text-2xl font-semibold text-blue-600">Show More</Link>
      </div>
      <CryptoItem/>
    </div>
  );
};

export default TopCrypto;
