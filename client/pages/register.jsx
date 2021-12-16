import Link from "next/link";
import React,{useState, useEffect} from "react";
import axios from "axios";


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.table({ name, email, password });
      const { data } = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      console.log("REGISTER RESPONSE", data);
    };

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        class=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md "
      >
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
              >
                Name:
              </label>
              <div class="relative">
                <div
                  class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                >
                  <i class="fas fa-user text-blue-500"></i>
                </div>

                <input
                value={name}
                onChange={e => setName(e.target.value)}
                  id="name"
                  type="text"
                  name="name"
                  class=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col mb-5">
              <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div class="relative">
                <div
                  class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                >
                  <i class="fas fa-at text-blue-500"></i>
                </div>
                            {/* Email */}
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  name="email"
                  class=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div class="relative">
                <div
                  class=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                >
                  <span>
                    <i class="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  name="password"
                  class=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div class="flex w-full">
              <button
                onClick={handleSubmit}
                type="submit"
                class=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in
                "
              >
                <span class="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          class=" inline-flex items-center text-gray-700 font-medium text-xs text-center "
        >
          <span class="ml-2">
            You have an account?
            <Link href="/login">
            <a class="text-xs ml-2 text-blue-500 font-semibold">
              Login here
            </a>
            </Link>
          </span>
        </a>
      </div>
    </div>
  );
}
