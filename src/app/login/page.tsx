"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";


    export default function LoginPage() {
        const [user, setuser] = React.useState({
            email: "",
            password: "",
        });

        const onLogin = async () => {
            // Add your login logic here
        };

        return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
                {/* Login */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center p-5 text-4xl font-bold text-gray-800"
                >
                    Login
                </motion.h1>
                <hr />

                {/* Email */}
                <label htmlFor="email" className="mt-6 text-lg text-gray-800">
                    Email
                </label>
                <input
                    className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}
                    placeholder="Email"
                    required
                />

                {/* Password */}
                <label htmlFor="password" className="mt-4 text-lg text-gray-800">
                    Password
                </label>
                <input
                    className="p-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    required
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 mt-6 text-white bg-blue-500 rounded-md"
                    onClick={onLogin}
                >
                    Login
                </motion.button>

                <p className="mt-5 text-black">
                    New User?{" "}
                    <Link href="/signup" className="p-1 text-white bg-blue-500 rounded-md">
                        Sign Up
                    </Link>
                </p>
            </div>
        );
    }
  