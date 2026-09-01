import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    Array.from(data.images).forEach((image) => formData.append("images", image));

    await axios.post("http://localhost:3000/user/create", formData);

    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create User
        </h1>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>

            <input
              {...register("images")}
              multiple
              type="file"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-600 cursor-pointer"
            />
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="Create User"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default App;
