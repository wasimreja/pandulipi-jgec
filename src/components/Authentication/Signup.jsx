import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Pandulipi Logo - White.webp";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const gradYears = ["2023", "2024", "2025", "2026", "Alumni"];
  const allDepartments = [
    "Civil Engineering",
    "Computer Science and Engineering",
    "Information Technology",
    "Electronics and Communication Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
  ];
  const [gradYear, setGradYear] = useState("");
  const [dept, setDept] = useState("");
  const { signup, error, isLoading } = useSignup();

  const PostSignUpInfo = async (event) => {
    event.preventDefault();
    await signup(name, email, password, cpassword, gradYear, dept);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen max-h-fit  bg-[#252b42] py-10 px-5">
        <div className=" flex-col rounded-xl max-w-lg bg-[#fff] shadow-[0_0_10px_#00000080]">
          <div className="bg-[#295C7Acc] flex items-center justify-center rounded-t-xl ">
            <img src={logo} className="w-9/12" alt="Pandulipi logo" />
          </div>
          <div className="flex flex-col items-center p-4 sm:px-16 ">
            <h1 className="text-center text-3xl pb-6 pt-2 font-semibold ">
              Create your account
            </h1>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative">
                <div className="absolute top-[-.9rem] left-[-.75rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#295C7A"
                    className="w-8 h-8 m-4"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
                        data-name="person"
                      />
                    </g>
                  </svg>
                </div>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="p-1.5 pl-10  text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-80 sm:w-96 focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute top-[-.7rem] left-[-.75rem] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#295C7A"
                    className="w-7 h-7 m-4"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 rounded-md w-80 sm:w-96 focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute top-[2px] left-[6px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="#295C7A"
                    className="w-10 h-10 mt-1.5 ml-0.5"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                </div>
                <select
                  className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96  rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value)}
                  name="gradYear"
                >
                  <option className="text-gray-500" value="" disabled selected>
                    The year of graduation
                  </option>
                  {gradYears.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <div className="absolute top-[1px] left-[2px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="#295C7A"
                    className="w-10 h-10 m-0.5"
                  >
                    <path
                      d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                      data-name="Layer 2"
                    />
                  </svg>
                </div>
                <select
                  className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96 rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                  name="dept"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                >
                  <option className="text-gray-500" value="" disabled selected>
                    Choose your department
                  </option>
                  {allDepartments.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 items-center justify-center w-full gap-x-3">
                <div className="relative">
                  <div className="absolute top-[3px] left-[.3rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="#295C7A"
                      className="w-7 h-7"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="off"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="p-1.5 pl-10 text-black font-medium bg-[#295C7A] bg-opacity-10 w-80 sm:w-96 rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-[3px] left-[.3rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="#295C7A"
                      className="w-7 h-7"
                    >
                      <path d="M 15 2 C 11.145666 2 8 5.1456661 8 9 L 8 11 L 6 11 C 4.895 11 4 11.895 4 13 L 4 25 C 4 26.105 4.895 27 6 27 L 24 27 C 25.105 27 26 26.105 26 25 L 26 13 C 26 11.895 25.105 11 24 11 L 22 11 L 22 9 C 22 5.2715823 19.036581 2.2685653 15.355469 2.0722656 A 1.0001 1.0001 0 0 0 15 2 z M 15 4 C 17.773666 4 20 6.2263339 20 9 L 20 11 L 10 11 L 10 9 C 10 6.2263339 12.226334 4 15 4 z" />
                    </svg>
                  </div>
                  <input
                    autoComplete="off"
                    type="password"
                    placeholder="Confirm your password"
                    name="cpassword"
                    className="p-1.5 pl-10 w-80 sm:w-96 text-black font-medium bg-[#295C7A] bg-opacity-10  rounded-md focus:shadow-[0px_0px_4px_#295C7A78] outline-none"
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </div>
              </div>
              {error && (
                <div className="text-red-600 font-bold my-1 bg-[#fbe7e7] p-1 rounded-md border-2 border-red-300">
                  {error}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="text-white text-lg py-2 px-6 font-bold mt-1 bg-[#295C7A] hover:bg-[#1a5171] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto  text-center"
                  disabled={isLoading}
                  onClick={PostSignUpInfo}
                >
                  Sign Up
                </button>
              </div>
              <div className="pb-2">
                <span className="text-xl font-medium">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="text-xl text-[#252b42] font-bold"
                  >
                    Login
                  </NavLink>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
