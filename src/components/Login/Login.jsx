import React from "react";

function Login() {
  return (
    // <div className="login">
    //   <div className="bg-purple-400 flex justify-center items-center h-screen max-w-full">
    //     <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
    //     <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block "></div>
    //     <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
    //       <div>
    //         <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
    //           Create An Account
    //         </h1>
    //         <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
    //           Create an account to enjoy all the services without any ads for
    //           free!
    //         </p>
    //       </div>
    //       <div className="space-y-4">
    //         <input
    //           type="text"
    //           placeholder="Email Address"
    //           className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Password"
    //           className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500"
    //         />
    //       </div>
    //       <div className="text-center mt-6">
    //         <button className="w-full py-2 text-xl text-white bg-purple-400 rounded-lg hover:bg-purple-500 transition-all">
    //           Create Account
    //         </button>
    //         <p className="mt-4 text-sm">
    //           Already Have An Account?{" "}
    //           <span className="underline  cursor-pointer"> Sign In</span>
    //         </p>
    //       </div>
    //     </div>
    //     <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
    //     <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-[#fff] flex items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-12 p-10 bg-white rounded-xl">
          {/* <div className="mb-6">
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
          </div> */}
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
          <div className="">
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
          <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200 cursor-pointer">
            forget password
          </span>
          <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
