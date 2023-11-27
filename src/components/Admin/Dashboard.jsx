// App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import TabelOrder from "../Admin/TabelOrder";
import TabelPaket from "../Admin/TabelPaket";
import TabelTeknisi from "../Admin/TabelTeknisi";


const Dashboard = () => {
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
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid m-5 flex-grow max-h-screen card bg-base-300 rounded-box place-items-center"><TabelOrder /></div> 
      <div className="divider lg:divider-horizontal"></div> 
      <div className="grid m-5 flex-grow h-64 card bg-base-300 rounded-box place-items-center">
        <div className="flex flex-col w-full">
          <div className="grid max-h-screen card bg-base-300 rounded-box place-items-center"><TabelPaket /></div> 
          <div className="divider"></div> 
          <div className="grid max-h-screen card bg-base-300 rounded-box place-items-center"><TabelTeknisi /></div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;
