import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button className="w-full cursor-pointer bg-purple-600 text-white py-3 rounded-md font-medium mb-3 hover:bg-purple-700 transition"
        onClick={()=>navigate("/createAccount")}
        >
          Create Account
        </button>

        <button className="w-full cursor-pointer bg-purple-200 text-gray-900 py-3 rounded-md font-medium hover:bg-purple-300 transition"
        onClick={()=>navigate("/signIn")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing
