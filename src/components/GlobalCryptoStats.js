const GlobalCryptoStats = () => {
  return (
    <div>
      <p className="text-4xl font-semibold text-black pb-4">
        Global Crypto Stats
      </p>

      <div className="grid grid-cols-2 grid-rows-3 place-content-between gap-x-16 gap-y-8 pb-8">
        <div>
          <p className="text-gray-600">Total Cryptocurrencies:</p>
          <p className="text-xl font-medium text-black">12,176</p>
        </div>
        <div>
          <p className="text-gray-600">Total Exchanges:</p>
          <p className="text-xl font-medium text-black">373</p>
        </div>

        <div>
          <p className="text-gray-600">Total Market Cap:</p>
          <p className="text-xl font-medium text-black">$2.4T</p>
        </div>
        <div>
          <p className="text-gray-500">Total 24h Volume:</p>
          <p className="text-xl font-medium text-black">$92.3B</p>
        </div>

        <div>
          <p className="text-gray-500">Total Cryptocurrencies</p>
          <p className="text-xl font-medium text-black">12,176</p>
        </div>
        <div>
          <p className="text-gray-500">Total Markets:</p>
          <p className="text-xl font-medium text-black">80K</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalCryptoStats;
