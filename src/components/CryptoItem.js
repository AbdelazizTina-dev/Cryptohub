const CryptoItem = () => {
  return (
    <div className="bg-white divide-y divide-gray-200 transition-all duration-700 ease-out hover:shadow-2xl">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-lg font-medium">1. Bitcoin</p>
        <img
          className="w-8 h-8"
          src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
          alt="coin logo"
        />
      </div>

      <div className="p-6 text-lg text-gray-800">
        <p className="pb-4">Price: 48.6K</p>
        <p className="pb-4">Market Cap: 914.6B</p>
        <p>Daily Change: 1.86%</p>
      </div>
    </div>
  );
};

export default CryptoItem;
