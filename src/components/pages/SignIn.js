import React, { useState } from "react";

import Image1 from "../../assets/images/image1.jpg";
import Logo from "../../assets/images/logo.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(email, password);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 m-5">
        <div className="content-center items-center lg:col-span-1">
          <div className="ml-[15%] mr-[15%] mt-[5%]">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <div className="text-2xl font-semibold">Sign in to Minimal</div>
              <div>
                New user?{" "}
                <a className="text-teal-400" href="/coming">
                  Create Account
                </a>
              </div>
            </div>
            <div className="content-center">
              <input
                type="email"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
              />
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div>
              <a href="/coming" className="underline">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4  w-full border-white-700 rounded flex"
                onClick={handleClick}
              >
                <span className="">Login</span>
                <span>{">"}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content-center items-center lg:col-span-2 ">
          <img className="w-full h-full" src={Image1} alt="" />
        </div>
      </div>
    </div>
  );
}
