import { Route, Routes } from "react-router-dom";
import Popular from "./Popular";
import Battle from "./Battle";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Popular />} exact />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </div>
  );
}
export default Main;
