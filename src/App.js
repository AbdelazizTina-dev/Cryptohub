import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
    <div className="flex flex-row bg-gray-200">
      <SideNav />
      <div className="w-full p-6 ml-96 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="crypto" element={<Currencies />} />
          <Route path="crypto/:uuid" element={<CurrencyDetails />} />
          <Route path="exchanges" element={<Exchanges />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
