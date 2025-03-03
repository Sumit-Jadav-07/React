import "./App.css";
import Navbar from "./components/common/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import ContentComponent from "./components/ContentComponent";
import Loader from "./components/common/Loader";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center items-center min-h-screen w-full p-5 bg-slate-800">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          <Routes>
            <Route path="/todos" element={<Todos />} />
            <Route path="/addtodo" element={<AddTodo />} />
            <Route path="/users" element={<ContentComponent />} />
            <Route path="/loader" element={<Loader />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
