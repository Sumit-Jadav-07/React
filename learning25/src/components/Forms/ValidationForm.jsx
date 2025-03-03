import React from 'react'
import { useForm } from 'react-hook-form'

const ValidationForm = () => {
     const {register, handleSubmit, formState: {errors}} = useForm({mode: "all"})

     const validationShcema = {
         name: {
             required: {
                 value: true,
                 message: "Name is required"
             },
            minLength: {
                value: 3,
                message: "Min length should be at least 3 characters"
            },
            maxLength: {
                value: 15,
                message: "Max length should be at most 15 characters"
            }
         },
        email: {
            required: {
                value: true,
                message: "Email is required"
            },
        },
        age: {
            required: {
                value: true,
                message: "Age is required"
            },
            min: {
                value: 18,
                message: "Age should be at least 18"
            },
            max: {
                value: 60,
                message: "Age should be at most 60"
            }
        },
        phone: {
            required: {
                value: true,
                message: "Phone is required"
            },
            pattern: {
                value: /[6-9]{1}[0-9]{9}/,
                message: "Phone number is invalid"
            }
        },
        refcode: {
            required: {
                value: true,
                message: "Refcode is required"
            },
            validate: {
                value: (value) => value === "Royal" || "Refcode is invalid"
            }
        }
    }

     const submitHandler = (data) => {
         console.log({data})
     }

   return (
     <div className="flex items-center justify-center">
         <form onSubmit={handleSubmit(submitHandler)} className="h-auto w-[700px] flex flex-col items-center justify-center gap-4 bg-cyan-400  border-4 border-[#8d8d8d] rounded-lg p-5">
         <h1 className="flex items-center justify-center col-span-2 p-2">ValidationFormDemo</h1>
             <div className="flex flex-col gap-1">
                 <label htmlFor="">Name</label>
                 <input type="text" placeholder="Enter your name" {...register("name", validationShcema.name)} className="p-2 border-2 rounded-md" />
                 {errors.name && <span>{errors.name?.message}</span>}
             </div>
             <div className="flex flex-col gap-1">
                 <label htmlFor="">Email</label>
                 <input type="text" placeholder="Enter your email" {...register("email", validationShcema.email)}  className="p-2 border-2 rounded-md"/>
                 <span>{errors.email?.message}</span>
             </div>
             <div className="flex flex-col gap-1">
                 <label htmlFor="">Age</label>
                 <input type="number" placeholder="Enter your age" {...register("age", validationShcema.age)}  className="p-2 border-2 rounded-md"/>
                 <span>{errors.age?.message}</span>
             </div>
             <div className="flex flex-col gap-1">
                 <label htmlFor="">Phone number</label>
                 <input type="text" placeholder="Enter your phone number" {...register("phone", validationShcema.phone)}  className="p-2 border-2 rounded-md"/>
                 <span>{errors.phone?.message}</span>
             </div>
             <div className="flex flex-col gap-1">
                 <label htmlFor="">Reference code</label>
                 <input type="text" placeholder="Enter your reference code" {...register("refcode", validationShcema.refcode)}  className="p-2 border-2 rounded-md"/>
                 <span>{errors.refcode?.message}</span>
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

export default ValidationForm
