import React from "react";

function SignUp() {
  return (
    <div className="min-h-screen bg-[#fff] flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-12 p-10 bg-white rounded-xl">
          <div className="mb-6">
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Name
            </label>
            <input
              type="text"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Email
            </label>
            <input
              type="text"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="@email"
            />
          </div>
          <div className="mb-6">
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Password
            </label>
            <input
              type="text"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Password"
            />
          </div>
          <div className="">
            <label
              className="mr-4 text-gray-700 font-bold inline-block mb-2"
              for="name"
            >
              Conform Password
            </label>
            <input
              type="text"
              className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
              placeholder="Conform Password"
            />
          </div>
          {/* <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200 cursor-pointer">
            forget password
          </span> */}
          <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
