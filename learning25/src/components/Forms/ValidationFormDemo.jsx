import React from 'react'
import { useForm } from 'react-hook-form'

const ValidationFormDemo = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const validationShcema = {
        name: {
            required: {
                value: true,
                message: "Name is required"
            }
        },
        email: {
            required: {
                value: true,
                message: "Email is required"
            }
        }
    }

    const submitHandler = (data) => {
        console.log({data})
    }

  return (
    <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(submitHandler)} className="h-[500px] w-[700px] flex flex-col items-center justify-center gap-4 bg-cyan-400  border-4 border-[#8d8d8d] rounded-lg p-5">
        <h1 className="flex items-center justify-center col-span-2 p-2">ValidationFormDemo</h1>
            <div className="flex flex-col gap-1">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your name" {...register("name", {required:{value: true, message: "Name is required"}})} className="p-2 border-2 rounded-md" />
                {errors.name && <span>{errors.name?.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email" {...register("email", validationShcema.email)}  className="p-2 border-2 rounded-md"/>
                <span>{errors.email?.message}</span>
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
  )
}

export default ValidationFormDemo
