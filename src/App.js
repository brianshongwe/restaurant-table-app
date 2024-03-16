import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // State to hold the menu records
  const [dish, setDish] = useState([]);
  const [wine, setWine] = useState([]);

  // Fetch menu data on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/db")
      .then((res) => {
        setDish(res.data.dishes);
        setWine(res.data.wines);
        console.log(res.data.dishes);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error.message);
        console.log("Error details:", error);
      });
  }, []);

  // Function to handle order button click
  const handleOrder = () => {
    console.log("Working");
    //
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <section className="w-full bg-black header-banner h-96">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-semibold text-center text-white md:text-4xl lg:text-5xl poppins">
              Menu
            </h1>
            <h1 className="text-sm font-semibold text-center text-white md:text-xl lg:text-xl poppins">
              Best food waiting for your belly
            </h1>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-5 gap-4 lg:grid-cols-5">
        {/* Map through menu records and render each item */}
        {dish.map((item) => (
          <button
            key={item.id}
            className="p-1 transition duration-700 transform rounded-lg hover:shadow-xl hover:scale-105"
            onClick={handleOrder}
          >
            {item.image && (
              // Render image if available
              <div class="flex items-center justify-center ">
                <div class="w-full max-w-md  mx-auto rounded-3xl overflow-hidden">
                  <div class="max-w-md mx-auto">
                    <img
                      className="w-[256px] h-52"
                      src={item.image}
                      alt={`Image of ${item.name}`}
                    />
                    <div class="p-4 sm:p-6">
                      <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                        {item.name}
                      </p>
                      <div class="flex flex-row">
                        <p class="text-[#3C3C4399] text-[17px] mr-2 line-through">
                          {item.price}
                        </p>
                      </div>
                      <p class="text-[#7C7C80] font-[15px] mt-6">
                        {item.description}
                      </p>

                      <a
                        target="_blank"
                        href="foodiesapp://food/1001"
                        class="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                      >
                        order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <h1 className="text-sm font-semibold">{item.name}</h1>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 lg:grid-cols-5">
        {/* Map through menu records and render each item */}
        {wine.map((item) => (
          <button
            key={item.id}
            className="p-1 transition duration-700 transform rounded-lg hover:shadow-xl hover:scale-105"
            onClick={handleOrder}
          >
            {item.image && (
              // Render image if available
              <div class="flex items-center justify-center ">
                <div class="w-full max-w-md  mx-auto rounded-3xl overflow-hidden">
                  <div class="max-w-md mx-auto">
                    <img
                      className="w-[256px] h-52"
                      src={item.image}
                      alt={`Image of ${item.name}`}
                    />
                    <div class="p-4 sm:p-6">
                      <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                        {item.name}
                      </p>
                      <div class="flex flex-row">
                        <p class="text-[#3C3C4399] text-[17px] mr-2 line-through">
                          {item.price}
                        </p>
                      </div>
                      <p class="text-[#7C7C80] font-[15px] mt-6">
                        {item.description}
                      </p>

                      <a
                        target="_blank"
                        href="foodiesapp://food/1001"
                        class="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                      >
                        order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
