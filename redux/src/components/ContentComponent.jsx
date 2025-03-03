import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/contentSlice";
import Loader from "../components/common/Loader";

const ContentComponent = () => {
  const dispatch = useDispatch();
  const contentState = useSelector((state) => state.content);
  const users = useSelector((state) => state.content.content?.data || []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (contentState.isLoading) {
    return <Loader />;
  }

  return (
    <div className={contentState.isLoading ? "hidden" : "h-full"}>
      <h1 className="text-center mb-4 text-2xl">Users</h1>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user._id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user._id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-red-600 hover:text-red-900 transform hover:scale-110 transition-all duration-200">
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="px-6 py-4 text-center text-gray-500 italic"
              >
                No users found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContentComponent;
