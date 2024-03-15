import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  // Fetch menu data on mount
  useEffect(() => {
    axios
      .get("http://localhost:1010/menu")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        // Handle error gracefully, e.g., display an error message
      });
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="text-[30px] font-bold">Menu</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
        {/* Grid container */}
        {records.map((d, i) => (
          <div
            key={i}
            className="p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:scale-105"
          >
            {d.image && ( // Render image only if it exists
              <img
                className="w-full px-8 py-3 pt-2 my-4 text-white transition duration-300 transform rounded-full h-52 focus:outline-none poppins "
                src={d.image}
                alt={`Image of ${d.name}`} // Descriptive alt text
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
