import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PhoneInput from "./pages/Phone/PhoneInput";

import "./styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/phone" element={<PhoneInput />} />
      </Routes>
    </>
  );
}

export default App;
