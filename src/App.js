import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <div className="flex flex-row">
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
