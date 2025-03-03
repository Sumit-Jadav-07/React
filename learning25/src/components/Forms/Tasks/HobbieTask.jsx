import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const HobbieTask = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "all" });
    const hobbiesList = ["Reading", "Traveling", "Gaming", "Cooking", "Sports", "Music"];
    const validationShcema = {
        fullName: {
            required: {
                value: true,
                message: "Full Name is required",
            },
            minLength: {
                value: 3,
                message: "Full Name should be at least 3 characters",
            },
            maxLength: {
                value: 15,
                message: "Full Name should be at most 15 characters",
            },
        },
        email: {
            required: {
                value: true,
                message: "Email is required",
            },
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email format",
            },
        },
        mobile: {
            required: {
                value: true,
                message: "Mobile Number is required",
            },
            pattern: {
                value: /[6-9]{1}[0-9]{9}/,
                message: "Invalid mobile number",
            },
        },
        gender: {
            required: {
                value: true,
                message: "Gender is required",
            },
        },
        city: {
            required: {
                value: true,
                message: "City is required",
            }
        }, hobbies :{
            required: {
                value: true,
                message: "Hobbies are required",
            },
            validate: (value) =>
                value.length >= 3 || "Please select at least three hobbies.",
        },
    }

    const submitHandler = (data) => {
        console.log({ data });
        console.log("Selected Hobbies: ", data.hobbies);
    };

    return (
        <div className="flex items-center justify-center h-[778px] bg-gray-100">
            <form
                className="w-[40%] h-[95%] p-6 overflow-y-auto bg-white rounded-lg shadow-md hmax-w-md"
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 className="mb-4 text-2xl font-bold text-center">User Information</h1>

                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        {...register("fullName", validationShcema.fullName)}
                        className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                    />
                    <span>{errors.fullName?.message}</span>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", validationShcema.email)}
                        className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                     <span>{errors.email?.message}</span>
                </div>

                {/* Mobile */}
                <div className="mb-4">
                    <label htmlFor="mobile" className="block font-medium text-gray-700">
                        Mobile
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        {...register("mobile", validationShcema.mobile)}
                        className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your mobile number"
                    />
                     <span>{errors.mobile?.message}</span>
                </div>

                {/* Gender */}
                <div className="mb-4">
                    <span className="block font-medium text-gray-700">Gender</span>
                    <div className="mt-2">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                {...register("gender", validationShcema.gender)}
                                className="text-blue-500 form-radio"
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                {...register("gender", validationShcema.gender)}
                                className="text-blue-500 form-radio"
                            />
                            <span className="ml-2">Female</span>
                        </label>
                    </div>
                    <span>{errors.gender?.message}</span>
                </div>

                {/* City */}
                <div className="mb-4">
                    <label htmlFor="city" className="block font-medium text-gray-700">
                        City
                    </label>
                    <select
                        id="city"
                        name="city"
                        {...register("city", validationShcema.city)}
                        className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select your city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Vadodara">Vadodara</option>
                    </select>
                    <span>{errors.city?.message}</span>
                </div>

                {/* Hobbies */}
                <div className="mb-4">
                    <span className="block font-medium text-gray-700">Hobbies</span>
                    <div className="mt-2">
                        {hobbiesList.map((hobby, index) => (
                            <label key={index} className="block">
                                <input
                                    type="checkbox"
                                    value={hobby}
                                    {...register("hobbies", validationShcema.hobbies)}
                                    className="mr-2"
                                />
                                {hobby}
                            </label>
                        ))}
                    </div>
                    <span>{errors.hobbies?.message}</span>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default HobbieTask
