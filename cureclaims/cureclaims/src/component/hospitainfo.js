import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function HospitalInfoForm() {
  const [formData, setFormData] = useState({
    hospitalname: "",
    email: "",
    address: "",
    phonenumber: "",
    registrationNumber:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    
    console.log(formData);
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Hospital Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="hospitalname" className="block text-sm font-medium text-gray-700">
            Hospital Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="hospitalname"
            name="hospitalname"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.hospitalname}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hospitalname" className="block text-sm font-medium text-gray-700">
            Registration Number
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="registrationNumber"
            name="registrationNumber"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.registrationNumber}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.email}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="phonenumber"
            name="phonenumber"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.phonenumber}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            onChange={handleChange}
            name="address"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.address}
          />
        </div>
<Link to="/users">
        <button
          type="Next"
          className="px-4 py-2 bg-red-300 text-white rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
        >
          Save
        </button>
        </Link>
      </form>
    </div>
  );
}

export default HospitalInfoForm;
