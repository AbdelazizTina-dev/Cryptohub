import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/UI/Footer";
import SideNav from "./components/UI/SideNav";
import Currencies from "./pages/Currencies";
import CurrencyDetails from "./pages/CurrencyDetails";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
import News from "./pages/News";
import { fetchCoins } from "./store/coins-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-200">
      <SideNav />
      <div className="w-full min-h-screen">
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="crypto" element={<Currencies />} />
            <Route path="crypto/:uuid" element={<CurrencyDetails />} />
            <Route path="exchanges" element={<Exchanges />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
