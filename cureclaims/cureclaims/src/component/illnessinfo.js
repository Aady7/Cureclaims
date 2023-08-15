import React, { useState } from "react";

function IllnessClaimForm() {
  const [formData, setFormData] = useState({
    illness: "",
    userId: "",
    hospitalName: "",
    description: "",
    claimDate:"",
    status:""
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
    <div className="max-w-md mx-auto mt-10 bg-white p-8 shadow-md ">
      <h2 className="text-2xl font-semibold mb-4">Insurance Claim</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="illness" className="block text-sm font-medium text-gray-700">
           Medical Details
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="illness"
            name="illness"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.illness}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="userId"
            name="userId"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.userId}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">
            Hospital Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            id="hospitalName"
            name="hospitalName"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.hospitalName}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            onChange={handleChange}
            name="description"
            type="text"
         
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.description}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
           Claim Date
          </label>
          <input
            id="claimDate"
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            name="claimDate"
             type="date"
       
            value={formData.claimDate}
          />
        </div>


        <button
          type="submit"
          className="px-4 py-2 bg-red-300 text-white rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default IllnessClaimForm;
