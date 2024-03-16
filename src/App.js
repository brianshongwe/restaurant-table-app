import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // State to hold the menu records
  const [records, setRecords] = useState([]);

  // Fetch menu data on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/db")
      .then((res) => {
        setRecords(res.data.menu);
        console.log(res.data.menu);
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
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {/* Map through menu records and render each item */}
        {records.map((item) => (
          <button
            key={item.id}
            className="p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:scale-105"
            onClick={handleOrder}
          >
            {item.image && (
              // Render image if available
              <img
                className="w-full px-8 py-3 pt-2 my-4 text-white transition duration-300 transform rounded-full h-52 focus:outline-none poppins"
                src={item.image}
                alt={`Image of ${item.name}`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
