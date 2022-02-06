import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/UI/SideNav";
import Currencies from "./pages/Currencies";
import CurrencyDetails from "./pages/CurrencyDetails";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <div className="h-auto flex flex-row bg-gray-200">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="crypto" element={<Currencies />}/>
        <Route path="crypto/:cryptoId" element={<CurrencyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
