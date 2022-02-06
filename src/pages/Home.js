import GlobalCryptoStats from "../components/Crypto/GlobalCryptoStats";
import TopCrypto from "../components/Crypto/TopCrypto";

const Home = () => {
  return (
    <div className="w-full p-6 ml-96">
      <GlobalCryptoStats />
      <TopCrypto />
    </div>
  );
};

export default Home;
