import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ userData , setUserData ] = useState({});

  const submitHandler = (data) => {
    console.log({data});
    setUserData(data);
    setIsSubmitted(true);
  };

  return (
    <>
    <div className="flex justify-center items-center h-full w-full">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex items-center justify-center flex-col h-[500px] w-[500px] gap-4 border-2 rounded-md"
        >
        <h2>Form</h2>
        <div className="flex items-center justify-center p-2 gap-3">
          <label>Name : </label>
          <input className="border-2 border-black p-2 rounded-md" type="text" placeholder="Enter Name" {...register("name")} />
        </div>
        <div className="flex items-center justify-center p-2 gap-3">
          <label>Email : </label>
          <input  className="border-2 border-black p-2 rounded-md"  type="email" placeholder="Enter Email" {...register("email")} />
        </div>
        <div className="flex items-center justify-center p-2 gap-3">
          <label>Gender : </label>
          Male : <input  className="border-2 border-black p-2 rounded-md"  type="radio"  {...register("gender")} />
          Female : <input  className="border-2 border-black p-2 rounded-md"  type="radio"  {...register("gender")} />
        </div>
        <div className="flex items-center justify-center p-2 gap-3">
          <label>Country : </label>
          <select  className="border-2 border-black p-2 rounded-md" {...register("country")}>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Russia">Russia</option>
            <option value="Switzerland">Switzerland</option>
          </select>
        </div>
        <div className="flex items-center justify-center p-2 gap-3">
          <label>Color : </label>
          <input  className="border-2 border-black rounded-md"  type="color" {...register("color")} />
        </div>
        <button type="submit" className="bg-black text-white p-3 rounded-md w-[140px]">Submit</button>
      </form>
    </div>

    {
      isSubmitted && 
      <div className={`flex justify-center items-center h-screen w-screen p-4 bg-slate-500`} style={{color:userData.color}}>
        <h2>Form submitted successfully</h2>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.gender}</p>
        <p>{userData.country}</p>
        <p>{userData.color}</p>
      </div>
    }
    </>
  );
};

export default FormDemo1;
