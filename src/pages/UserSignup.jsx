import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import UserDataContext from '../context/UserContext'

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

  if(response.status === 201) {
    const data = response.data
    setUser(data.user)
    localStorage.setItem('token', data.token)
    navigate('/home')
  }

  setEmail("");
  setPassword("");
  setFirstname("");
  setLastname("");
};

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://i.pinimg.com/236x/48/1f/92/481f9273ee7de4024acd7f249397defc.jpg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-semibold mb-2">Whats your name</h3>
          <div className="flex gap-6">
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 text-lg w-1/2 placeholder:text-base"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              required
              type="text"
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 text-lg w-1/2 placeholder:text-base"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg font-semibold">Enter Email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-semibold">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create account
          </button>
          <p className="text-center font-medium">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
