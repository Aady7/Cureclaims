import { useState } from "react";
import { Link } from "react-router-dom";


function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    policyNumber: "",
    insuranceProvider: "",
    dateOfBirth: "",
    policyStartDate: "",
    policyEndDate: ""
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
    // Here, you can perform any necessary actions with the form data,
    // such as sending it to the server or performing validation.
    console.log(formData);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-10 bg-white p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>
      <form onSubmit={handleSubmit} >
      <div className="flex">

        <div className="m-4 w-1/2">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.firstName}
          />
        </div>

        <div className="m-4 w-1/2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.lastName}
          />
        </div>
        </div>
<div className="flex">
        <div className="m-4 w-1/2">
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
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Phone Number
          </label>
          <input
            type="String"
            onChange={handleChange}
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.phoneNumber}
          />
        </div>
        </div>
        <div className="flex">
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type=" address"
            onChange={handleChange}
            id=" address"
            name="address"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.address}
          />
        </div>
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Policy Number
          </label>
          <input
            type="String"
            onChange={handleChange}
           
            id="policyNumber"
            name="policyNumber"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.policyNumber}
          />
        </div>
        </div>
        <div className="flex">
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Insurance Provider
          </label>
          <input
            type="insuranceProvider"
            onChange={handleChange}
            id="insuranceProvider"
            name="insuranceProvider"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.insuranceProvider}
          />
        </div>
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Date Of Birth
          </label>
          <input
            type="date"
            onChange={handleChange}
           
            id="dateOfBirth"
            name="dateOfBirth"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.dateOfBirth}
          />
        </div>
        </div>
        <div className="flex">
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Policy Start Date
          </label>
          <input
            type="date"
            onChange={handleChange}
            id="policyStartDate"
            name="policyStartDate"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.policyStartDate}
          />
        </div>
        <div className="m-4 w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Policy End Date
          </label>
          <input
            type="date"
            onChange={handleChange}
           
            id="policyEndDate"
            name="policyEndDate"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.policyEndDate}
          />
        </div>
        </div>
        
<Link to="/illness">
        
        <button
          type="submit"
          className="px-4 py-2 bg-red-300 text-black rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400"
        >
          Next
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Form;

  