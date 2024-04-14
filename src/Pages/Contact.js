import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=' py-20 w-screen h-screen  bg-pink-100'>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <h1 className=' text-center text-4xl font-semibold  mb-4'>Contact Us</h1>




    <div className="mb-4">
      <input
        type="text"
        {...register("Name", { required: true })}
        placeholder="Name"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      {errors.Name && <span className="text-red-500">This field is required</span>}
    </div>

  


    <div className="mb-4">
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Email"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      {errors.email && <span className="text-red-500">This field is required</span>}
    </div>


    <div className="mb-4">
      <textarea rows={5} cols={10}
        type="text"
        {...register("text", { required: true })}
        placeholder="Your Response"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      {errors.text && <span className="text-red-500">This field is required</span>}
    </div>
   
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Submit
    </button>
        </form>
  
  </div>
    
  );
};

export default Contact;
