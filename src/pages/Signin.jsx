import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false)

  const isDisabled = !userData.email || !userData.password

  function handleChange(e) {
    const { name, value } = e.target;

    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()

    const dbData = JSON.parse(localStorage.getItem("UserDetails"))

    const emailDB = dbData.email
    const passwordDB = dbData.password



    if(userData.email !== emailDB || userData.password !== passwordDB){
        setError("Invalid Creadentials")
        console.log("Invalid")
        return;
    }

    navigate("/account")

  }

  return (
    <form onSubmit={handleLogin} className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-purple-600 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Login Button */}
        <button
          disabled={isDisabled}
          className={`w-full py-3 rounded-md font-medium transition
    ${
      isDisabled
        ? "bg-gray-300 text-white cursor-not-allowed"
        : "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
    }
  `}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Signin;
