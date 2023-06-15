import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Checkout from "./Pages/Checkout";

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
   </Routes>
  );
}

export default App;
