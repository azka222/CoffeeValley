"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../../../component/navbar";
import CoffeeData from "../../../component/coffeeData";
import Footer from "../../../component/footer";

export default function Home() {
  const API_URL = process.env.API_URL || "http://localhost:8000";
  const [beans, setBeans] = React.useState<
    { id: number; bean: string; sales_price: number; description: string }[]
  >([]);

  React.useEffect(() => {
    const fetchBeanData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/beans/index`);
        if (response.status === 200) {
          setBeans(response.data);
          console.log( response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBeanData();
  }, []);

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
      <div className="w-1/3 pt-20 mx-20">
        {beans.length > 0 ? (
          beans.map((bean) => (
            <CoffeeData
              key={bean.id}
              beanType={bean.bean}
              salesPrice={bean.sales_price}
              description={bean.description}
            />
          ))
        ) : (
          <p className="text-gray-500">Loading beans...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
