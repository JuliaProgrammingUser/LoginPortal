"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { set } from "mongoose";


export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  
  const onSignup = async () => {
    try {
      
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log("Signup success", response.data);
        router.push("/login");
        
    } catch (error:any) {
        console.log("Signup failed", error.message);
        toast.error(error.message);
    }finally {
        setLoading(false);
    }
}


  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 7 &&user.password.length <21 && user.firstName.length > 2 && user.mobile.length ==10) {
        setButtonDisabled(false);
    } else {
        setButtonDisabled(true);
    }
}, [user]);


  return (

  <div className="absolute right-0 h-9/10 w-5/10 m-10 p-5 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500">
    
    <div className="flex flex-col items-center justify-center py-1 bg-white">
      {/* Signup */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center p-3 text-4xl font-bold text-gray-800"
      >
        Signup
      </motion.h1>
      <hr />

      {/* First Name */}
      <label htmlFor="firstName" className="mt-1 text-lg text-gray-800">
        First Name
      </label>
      <input
        className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        id="firstName"
        type="text"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        placeholder="Use 3 or more characters"
        required
      />

      {/* Last Name */}
      <label htmlFor="lastName" className="mt-1 text-lg text-gray-800">
        Last Name
      </label>
      <input
        className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        id="lastName"
        type="text"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="Last Name"
      />

      {/* Mobile */}
      <label htmlFor="mobile" className="mt-1 text-lg text-gray-800">
        Mobile
      </label>
      <input
        className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        id="mobile"
        type="text"
        value={user.mobile}
        onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        placeholder="10 digit mobile number"
        required
      />

      {/* Email */}
      <label htmlFor="email" className="mt-1 text-lg text-gray-800">
        Email
      </label>
      <input
        className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        required
      />

      {/* Password */}
      <label htmlFor="password" className="mt-1 text-lg text-gray-800">
        Password
      </label>
      <input
        className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="8-20 characters"
        required
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2 mt-6 text-white bg-blue-500 rounded-md"
        onClick={onSignup}
      >
        Register
      </motion.button>
      <p className="p-4 m-4 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500">
      {buttonDisabled ? "Complete the 'First Name',  'Mobile', 'Email' and 'Password' section." : "Registation can be done."}</p>
      <p className="my-5 text-black">
        Already have an account?{" "}
        <Link href="/login" className="p-1 text-white bg-blue-500 rounded-md">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
}
