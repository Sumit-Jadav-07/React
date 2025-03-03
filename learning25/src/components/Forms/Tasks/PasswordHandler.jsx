import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const PasswordHandler = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ mode: "all" });
    const validationShcema = {
        password: {
            required: {
                value: true,
                message: "Password is required"
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
            },
            onchange : handlePasswordChange
        }
    }

    const [validationStatus, setValidationStatus] = useState({
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        specialChar: false,
    });

    const validatePassword = (password) => {
        setValidationStatus({
            length: password.length >= 8 && password.length <= 15,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            specialChar: /[@$!%*?&]/.test(password),
        });
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        validatePassword(password);
    };

    // const isLength = password.length >= 8 && password.length <= 15
    // const isSpecialChar = /[@$!%*?&]/.test(password)
    // const isNumber = /[0-9]/.test(password)
    // const isLowerChar = /[a-z]/.test(password)
    // const isUpperChar = /[A-Z]/.test(password)

    const submitHandler = (data) => {
        console.log(data);
    }
    return (
        <div className='flex flex-col items-center justify-center h-[778px] bg-gray-100'>
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col bg-gray-600 h-[350px] w-[400px] justify-center rounded-md p-4'>
                <div className='flex flex-col gap-2 text-white'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter password' {...register("password", validationShcema.password)} className='w-[350px] p-2 text-black rounded-md ' />
                    {errors.password && (
                        <span className="text-red-500">{errors.password.message}</span>
                    )}
                </div>
                <p className={validationStatus.length ? "text-green-500" : "text-red-500"}>Length should be between 8 to 15.</p>
                <p className={validationStatus.lowercase ? "text-green-500" : "text-red-500"}>Should contain lowercase.</p>
                <p className={validationStatus.uppercase ? "text-green-500" : "text-red-500"}>Should contain uppercase.</p>
                <p className={validationStatus.number ? "text-green-500" : "text-red-500"}>Should contain numbers.</p>
                <p className={validationStatus.specialChar ? "text-green-500" : "text-red-500"}>Should contain Special character.</p>
                <button type='submit' className='p-2 mt-4 text-white bg-blue-500 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default PasswordHandler
