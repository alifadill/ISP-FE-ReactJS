// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/getAllPaket";

const Paket = () => {
  const [paketData, setPaketData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setPaketData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="wrapper flex justify-center">
        {paketData.map((paket) => (
          <div key={paket.id} className="card w-64 bg-base-100 shadow-md m-4">
            {" "}
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-4">
              {" "}
              <h2 className="card-title text-lg font-semibold">
                {paket.name}
              </h2>{" "}
              <p className="text-sm text-gray-500">{paket.description}</p>{" "}
              <div className="card-actions mt-2">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paket;
