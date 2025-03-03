import React from 'react'
import { useForm } from 'react-hook-form';

const RegexTask = () => {
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
            pattern:{
                value: /^[A-Za-z\s]+$/,
                message: "Full Name should contain only alphabets and spaces"
            }
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
        pincode: {
            required: {
                value: true,
                message: "Pincode is required",
            },
            pattern: {
                value: /^[0-9]{6}$/,
                message: "Invalid pincode",
            },
        }
    }

    const submitHandler = (data) => {
        console.log({ data });
        console.log("Selected Hobbies: ", data.hobbies);
    };

    return (
        <div className="flex items-center justify-center h-[778px] bg-gray-100">
            <form
                className="w-[40%] h-auto p-6 overflow-y-auto bg-white rounded-lg shadow-md hmax-w-md"
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

                {/* Pincode */}
                <div className="mb-4">
                    <label htmlFor="pincode" className="block font-medium text-gray-700">
                        Pincode
                    </label>
                    <input
                        type="tel"
                        id="pincode"
                        name="pincode"
                        {...register("pincode", validationShcema.pincode)}
                        className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your pincode"
                    />
                     <span>{errors.pincode?.message}</span>
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

export default RegexTask
