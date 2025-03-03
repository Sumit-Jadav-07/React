import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/slices/todoSlice";
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Task
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {todo.text}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-600 hover:text-red-900 transform hover:scale-110 transition-all duration-200"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {todos.length === 0 && (
            <tr>
              <td
                colSpan="2"
                className="px-6 py-4 text-center text-gray-500 italic"
              >
                No todos yet. Add some tasks!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
