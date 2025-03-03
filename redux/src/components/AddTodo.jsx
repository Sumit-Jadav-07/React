import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center p-5 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
        <form
          onSubmit={addTodoHandler}
          className="flex w-full max-w-lg bg-white p-4 rounded-lg shadow-md"
        >
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded-r-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>
      </div>

      <Todos></Todos>
    </div>
  );
};

export default AddTodo;
