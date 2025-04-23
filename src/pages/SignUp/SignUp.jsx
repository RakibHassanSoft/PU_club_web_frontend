import { useState } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../../../public/lottie-animation1.json"; // Make sure this path is correct
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    puId: "",
    codeforcesHandle: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r  px-4">
      <div className="bg-white  w-full max-w-6xl rounded-lg  flex flex-col md:flex-row overflow-hidden shadow-xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Sign Up - PU Programming Club
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 m-10">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="John Doe"
              onChange={handleChange}
            />
            <InputField
              label="PU Student ID"
              name="puId"
              placeholder="PU123456"
              onChange={handleChange}
            />
            <InputField
              label="Codeforces Handle"
              name="codeforcesHandle"
              placeholder="codeforces_user"
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              onChange={handleChange}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already a member?{" "}
            <Link
              to="/signin"
              className="text-red-600 font-semibold cursor-pointer hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Animation Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-r from-red-50 to-red-700 p-6">
          <Lottie
            animationData={signupAnimation}
            loop={true}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, placeholder, onChange, type = "text" }) => (
  <div>
    <label className="block mb-1 text-red-700 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      required
      onChange={onChange}
      className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      placeholder={placeholder}
    />
  </div>
);

export default Signup;
