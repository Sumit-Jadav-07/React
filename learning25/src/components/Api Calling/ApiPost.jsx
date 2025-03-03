import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ApiPost = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        const user = {
            name: data.name,
            email: data.email,
            age: data.age,
            isActive: true,
        }

        // Using toast.promise for loading, success, and error states
        const postPromise = axios.post("https://node5.onrender.com/user/user", user);

        toast.promise(
            postPromise,
            {
                pending: "Adding user...",
                success: {
                    render: "User added successfully! 🎉",
                    onClose: () => navigate("/apicallingget"),
                },
                error: "Failed to add user. Please try again. 😞",
            },
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            }
        );

        try {
            const response = await postPromise;
            console.log(response.data);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }; // end of submitHandler

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

            <div
                className={`h-[779px] w-screen bg-[#ffffff] flex items-center justify-center transition-all duration-100 ease-linear`}
            >
                <div className="flex items-center justify-center">
                    <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="h-[500px] w-[700px] flex flex-col items-center justify-center gap-4 bg-cyan-400  border-4 border-[#8d8d8d] rounded-lg p-5"
                    >

                        <div className="flex flex-col w-full gap-1">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                {...register("name")}
                                className="p-2 border-2 rounded-md"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-1">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className="p-2 border-2 rounded-md"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-1">
                            <label>Age</label>
                            <input
                                type="number"
                                placeholder="Enter your age"
                                {...register("age")}
                                className="p-2 border-2 rounded-md"
                            />
                        </div>

                        <div className="mt-[40px] ms-center justify-center col-span-2 p-3 text-white rounded-md mt-flex bg-slate-600">
                            <input
                                type="submit"
                                value="Submit"
                                className="w-[250px] h-full cursor-pointer"
                            ></input>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default ApiPost
