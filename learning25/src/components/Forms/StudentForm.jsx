import React, { useState } from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const { register, handleSubmit } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [studentData, setStudentData] = useState({});

  const submitHandler = (data) => {
    setStudentData(data);
    setIsSubmitted(true);
  };

  return (
    <div
      className={`h-[779px] grid ${
        isSubmitted ? "grid-cols-2" : "grid-cols-1"
      } bg-[#ffffff] items-center transition-all duration-100 ease-linear`}
    >
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="h-[500px] w-[700px] grid grid-cols-2 items-center justify-center gap-4 bg-cyan-400  border-4 border-[#8d8d8d] rounded-lg p-5"
        >
          <h1 className="flex items-center justify-center col-span-2 p-2">
            Student Form
          </h1>

          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Phone number</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("phoneNumber")}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Batch</label>
            <input
              type="text"
              placeholder="Enter your batch"
              {...register("batch")}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col col-span-2 gap-1">
            <label>Gender</label>
            <div className="flex gap-2">
              Male :{" "}
              <input
                type="radio"
                value="Male"
                {...register("gender")}
                className="p-2 border-2 rounded-md"
              />
              Female :{" "}
              <input
                type="radio"
                value="Female"
                {...register("gender")}
                className="p-2 border-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label>College</label>
            <input
              type="text"
              placeholder="Enter your clg"
              {...register("college")}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>City</label>
            <select className="p-2 border-2 rounded-md" {...register("city")}>
              <option value="">Select city</option>
              <option value="Ahmeadabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Himmatnagar">Himmatnagar</option>
              <option value="Bhavnagar">Bhavnagar</option>
            </select>
          </div>

          <div className="flex items-center justify-center col-span-2 p-3 text-white rounded-md bg-slate-600">
            <input
              type="submit"
              value="Submit"
              className="w-full h-full cursor-pointer"
            ></input>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center">
        {isSubmitted && (
          <div className="flex items-center justify-center text-[40px]">
            <div>
              <p>Name: {studentData.name}</p>
              <p>Email: {studentData.email}</p>
              <p>Phone Number: {studentData.phoneNumber}</p>
              <p>Batch: {studentData.batch}</p>
              <p>Gender: {studentData.gender}</p>
              <p>College: {studentData.college}</p>
              <p>City: {studentData.city}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
