import React, { useState } from "react";

export default function Order() {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    profileImage: null,
  });

  const [addressData, setAddressData] = useState({
    city: "",
    subdistrict: "",
    address: "",
  });

  const handleCustomerChange = (e) => {
    if (e.target.name === "profileImage") {
      setCustomerData({
        ...customerData,
        [e.target.name]: e.target.files[0], // Use files array for file input
      });
    } else {
      setCustomerData({
        ...customerData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAddressChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log("Customer Data:", customerData);
    console.log("Address Data:", addressData);
    // Add logic to send data to the server or perform other actions
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between">
        {/* Formulir Data Pelanggan */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 w-1/2">
          <h3 className="text-lg font-semibold mb-4">Data Pelanggan</h3>
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="Nama"
              name="name"
              className="input input-bordered w-full max-w-xs mb-4"
              value={customerData.name}
              onChange={handleCustomerChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full max-w-xs mb-4"
              value={customerData.email}
              onChange={handleCustomerChange}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Image
            </label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleCustomerChange}
            />
          </div>
        </div>

        {/* Formulir Alamat Pemesanan */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 w-1/2">
          <h3 className="text-lg font-semibold mb-4">Alamat Pemesanan</h3>
          <div>
            <input
              type="text"
              placeholder="Kota"
              name="city"
              className="input input-bordered w-full max-w-xs mb-4"
              value={addressData.city}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              placeholder="Kecamatan"
              name="subdistrict"
              className="input input-bordered w-full max-w-xs mb-4"
              value={addressData.subdistrict}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              placeholder="Jalan"
              name="address"
              className="input input-bordered w-full max-w-xs"
              value={addressData.address}
              onChange={handleAddressChange}
            />
            {/* Tombol Submit Order */}
            <div className="mt-6">
              <button
                className="btn btn-primary w-full max-w-xs"
                onClick={handleSubmit}
              >
                Submit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
