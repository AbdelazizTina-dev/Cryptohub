import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/UI/SideNav";
import Currencies from "./pages/Currencies";
import CurrencyDetails from "./pages/CurrencyDetails";
import Home from "./pages/Home";
import News from "./pages/News";
import { fetchCoins } from "./store/coins-slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="h-auto flex flex-row bg-gray-200">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="crypto" element={<Currencies />} />
        <Route path="crypto/:uuid" element={<CurrencyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
