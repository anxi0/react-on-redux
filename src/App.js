import { Route, Routes, BrowserRouter } from "react-router-dom";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<HomePage />} /> */}
        <Route path="counter" element={<Counter />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
