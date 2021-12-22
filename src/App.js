import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<HomePage />} /> */}
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
