// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

const API_URL = "http://127.0.0.1:8000/api/getAllTeknisi";

const TabelTeknisi = () => {
  const [teknisiData, setTeknisiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      // console.log(response)

      setTeknisiData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // console.log(teknisiData.data)
    // <p>test</p>
    // <Navbar />{" "}


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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default TabelTeknisi;
