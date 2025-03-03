import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ApiDemo = () => {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const getData = async () => {
        try {
            const response = await axios.get("https://node5.onrender.com/user/user");
            console.log(response.data.data);
            setUserData(response.data.data); // Store data in state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const showDetails = async (id) => {
        console.log("User ID:", id);
        try {
            const response = await axios.get(`https://node5.onrender.com/user/user/${id}`);
            console.log("User Details:", response.data.data);
            setUser(response.data.data);
            setShow(true);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://node5.onrender.com/user/user/${id}`);
            console.log("User deleted successfully");
            toast.success('Successfully deleted', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            getData();
        }
    };

    return (
        <>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="flex flex-col items-center justify-center h-auto p-5">
                <button
                    onClick={getData}
                    className="p-2 mb-5 text-white transition bg-blue-500 rounded-md hover:bg-blue-700"
                >
                    Get Data
                </button>

                {/* Display the data in a table */}
                <div className="w-full overflow-x-auto">
                    <table className="min-w-full border border-collapse border-gray-300 table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-left border">Name</th>
                                <th className="p-2 text-left border">Email</th>
                                <th className="p-2 text-left border">Age</th>
                                <th className="p-2 text-left border">Active</th>
                                <th className="p-2 text-left border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="p-2 border">{user.name}</td>
                                    <td className="p-2 border">{user.email}</td>
                                    <td className="p-2 border">{user.age}</td>
                                    <td className="p-2 border">{user.isActive ? 'Yes' : 'No'}</td>
                                    <td className="p-2 border">
                                        <Button onClick={() => { showDetails(user._id) }} variant="info" className='mr-3'>Details</Button>
                                        <Button onClick={() => { deleteUser(user._id) }} variant='danger'>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ApiDemo;
