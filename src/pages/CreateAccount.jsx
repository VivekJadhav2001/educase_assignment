import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [userData, setUserData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "true" : value,
    }));
    setErrors({ ...errors, [name]: "" });
  }

  function validateFields() {
    const errorDetails = {};

    if (!userData.fullName.trim()) {
      errorDetails.name = "Full Name Is Required";
    }
    if (
      !userData.phoneNumber.trim() ||
      userData.phoneNumber.trim().length < 10
    ) {
      errorDetails.phone = "Phone Number must be at least 10 digits";
    }

    if (!userData.email.trim()) {
      errorDetails.emailAddress = "Email Address Is Required";
    }

    if (!userData.password.trim()) {
      errorDetails.password = "Password Is Required";
    }

    return errorDetails;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("UserDetails", JSON.stringify(userData));
    navigate("/signIn");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-white flex flex-col"
    >
      {/* Content */}
      <div className="flex-1 px-4 pt-10 max-w-sm w-full mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h1>

        {/* Full Name */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600 mb-1 block">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Marry Doe"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600 mb-1 block">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600 mb-1 block">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.emailAddress && (
            <p className="text-sm text-red-500">{errors.emailAddress}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600 mb-1 block">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label className="text-sm font-medium text-purple-600 mb-1 block">
            Company name
          </label>
          <input
            type="text"
            name="companyName"
            value={userData.companyName}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Agency */}
        <div className="mb-10">
          <p className="text-sm text-gray-900 font-medium mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="isAgency"
                value="true"
                checked={userData.isAgency === true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="isAgency"
                value="false"
                checked={userData.isAgency === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="max-w-sm mx-auto">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccount;
