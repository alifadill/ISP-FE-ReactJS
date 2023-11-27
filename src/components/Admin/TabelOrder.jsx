// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

const API_URL = "http://127.0.0.1:8000/api/order";

const TabelOrder = () => {
  const [orderData, setOrderData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      // console.log(response)

      setOrderData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // pass
    // console.log(orderData.data)
    // <p>test</p>
    // <Navbar />{" "}
    // <div>
    //   {orderData.map((order)=>(
    //     <h4>{order.address}</h4>
    //   ))}
    // </div>

    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
        {orderData.map((order)=>(
          <tr>
            <th>{order.id}</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        ))}
         
        </tbody>
      </table>
    </div>
    );
};

export default TabelOrder;
