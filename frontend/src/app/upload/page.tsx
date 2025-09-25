"use client";
import React from "react";
import axios from "axios";
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import { useRouter } from "next/navigation";

export default function Upload() {
  const API_URL = process.env.API_URL || "http://localhost:8000";
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    title: "",
    file: null,
    author: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" && files ? files[0] : value,
    }));
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.file) {
        return;
      }
      const data = new FormData();
      data.append("title", formData.title);
      data.append("file", formData.file);
      data.append("author", formData.author);

      const response = await axios.post(`${API_URL}/api/file/upload`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);
    } catch (error: any) {}
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
      <Navbar />
      <form className="text-gray-900" onSubmit={handleUpload}>
        <div className="w-1/3 pt-20 mx-20 ">
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            id="title"
            name="title"
            className="border border-gray-300 rounded-md mb-4 p-2 w-full"
            type="text"
            placeholder="Enter document title"
            onChange={handleChange}
          />
          <label htmlFor="file" className="block mt-4 mb-2">
            Document File
          </label>
          <input
            id="file"
            name="file"
            type="file"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            placeholder="Choose a file to upload"
            onChange={handleChange}
          />
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            type="text"
            placeholder="Enter author name"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Upload
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
