import GlobalCryptoStats from "../components/GlobalCryptoStats";
import TopCrypto from "../components/TopCrypto";

const Home = () => {
  return (
    <div className="w-full p-6 ml-96">
      <GlobalCryptoStats />
      <TopCrypto />
    </div>
  );
};

export default Home;
