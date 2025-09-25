"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

export default function Login() {
  const API_URL = process.env.API_URL || "http://localhost:8000";
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    user_id: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios
        .get(`${API_URL}/sanctum/csrf-cookie`, {
          withCredentials: true,
        })
        .then(async () => {
          return await axios.post(`${API_URL}/api/login`, formData, {
            withCredentials: true,
          });
        })
        .then((response) => {
          if (response.status === 200) {
            router.push("/home");
          }
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message || "Login failed");
        });
    } catch (error) {
      console.error("CSRF Cookie Error:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="w-1/3 pt-20 mx-20">
        <div className="mx-20 py-20">
          <h2 className="text-2xl font-bold mb-2 text-amber-800">
            Coffee Valley
          </h2>
          <h3 className="text-xm font-bold mb-2 text-black">
            Taste the love in every cup
          </h3>
          <p className="text-sm text-gray-600">One Alewife Center 3rd Floor</p>
          <p className="text-sm text-gray-600">Cambridge, MA 02140</p>
        </div>
        <div className="flex items-center mb-6">
          <label
            className="w-32 text-gray-700 text-sm font-bold"
            htmlFor="user_id"
          >
            User ID
          </label>
          <input
            className="flex border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_id"
            name="user_id"
            placeholder="enter user id"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center mb-6">
          <label
            className="w-32 text-gray-700 text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="flex border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            placeholder="enter password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        {errorMessage && (
          <div className="mt-4 text-red-500">{errorMessage}</div>
        )}
      </div>
    </div>
  );
}
