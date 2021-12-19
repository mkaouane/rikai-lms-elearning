import Link from "next/link";
import React,{useState, useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {SyncOutlined} from '@ant-design/icons'
import { Context } from "../context";
import {useRouter} from 'next/router'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    // state
    const {state, dispatch} = useContext(Context)

    // Router
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.table({ name, email, password });
      try {
        setLoading(true);
        const { data } = await axios.post(`/api/login`, {
          email,
          password,
        });
        // console.log("LOGIN RESPONSE", data);
        dispatch({
          type: "LOGIN",
          payload: data,
        })
        window.localStorage.setItem('user', JSON.stringify(data));
        router.push("/")
        setLoading(false);
      } catch (err) {
        toast(err.response.data);
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Log In
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} action="#">
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div
                  className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                            {/* Email */}
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  name="email"
                  className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div
                  className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  name="password"
                  className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in
                "
                disabled={!email || !password || loading}
              >
                {loading ? <SyncOutlined spin/> : <span className="mr-2 uppercase">Sign up</span>}
                <span>
                  {loading ?"" : <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> }
                  
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          className=" inline-flex items-center text-gray-700 font-medium text-xs text-center "
        >
          <span className="ml-2">
            You don't have an account?
            <Link href="/register">
            <a className="text-xs ml-2 text-blue-500 font-semibold">
              Login here
            </a>
            </Link>
          </span>
        </a>
      </div>
    </div>
  );
}
