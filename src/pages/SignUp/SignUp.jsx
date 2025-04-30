import { useState } from "react";
import Lottie from "lottie-react";
import signupAnimation from "../../../public/lottie-animation1.json"; // Make sure this path is correct
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosData from "../../hook/useAxiosData";
const Signup = () => {
  const navigation = useNavigate();
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
  const { data, loading, error, mutate } = useAxiosData({
    secure: false, // Public API
    method: "POST",
    endpoint: "/auth/register",
  });
  //  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let { fullName, puId, codeforcesHandle, email, password, confirmPassword } =
      formData;

    fullName = fullName.trim();
    puId = puId.trim();
    codeforcesHandle = codeforcesHandle.trim();
    email = email.trim();

    // Check 1: puId has 9 digits
    if (!/^\d{9}$/.test(puId)) {
      return Swal.fire("Error", "PU ID must be exactly 9 digits.", "error");
    }

    // Check 2: Codeforces handle is real
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${codeforcesHandle}`
      );
      const result = await response.json();

      if (result.status !== "OK") {
        return Swal.fire("Error", "Invalid Codeforces handle.", "error");
      }
    } catch (error) {
      return Swal.fire("Error", "Failed to verify Codeforces handle.", "error");
    }

    // Check 3: Email format
    const expectedEmail = `${puId}@student.presidency.edu.bd`;
    if (email !== expectedEmail) {
      return Swal.fire("Error", `Email must be: ${expectedEmail}`, "error");
    }

    // Check 4: Password structure
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire(
        "Error",
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        "error"
      );
    }

    // Check 5: Password match
    if (password !== confirmPassword) {
      return Swal.fire("Error", "Passwords do not match.", "error");
    }

    // All checks passed
    console.log("Submitted Data:", {
      fullName,
      puId,
      codeforcesHandle,
      email,
      password,
    });
    if (loading) {
      return Swal.fire("Error", "Loading...", "error");
    }

    await mutate({ fullName, puId, codeforcesHandle, email, password }); 
    if(data) {
      Swal.fire("Success", "Account created successfully!", "success");
      navigation("/")
    }
    if (error) {
      Swal.fire("Error", "Failed to create account.", "error");
    }

  };

  return (
    <section className=" flex items-center justify-center bg-gradient-to-r  lg:px-4 mb-10">
      <div className="flex  mt-20 flex-col md:flex-row items-center bg-gradient-to-r from-red-500 to-red-800  rounded-lg  max-w-5xl w-full overflow-hidden  shadow-xl">
        {/* Animation Section */}
        <div className="w-full  md:w-1/2 flex items-center justify-center p-6">
          <Lottie
            animationData={signupAnimation}
            loop={true}
            className="w-full  max-w-md"
          />
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-1 lg:p-4 bg-white">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-2">
            PU Programming Club
          </h2>
          <h2 className="text-3xl font-bold text-center text-red-800 mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 m-10 ">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="md rakibul islam"
              onChange={handleChange}
            />
            <InputField
              label="PU Student ID"
              name="puId"
              placeholder="123456789"
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
              placeholder="123456789@student.presidency.edu.bd"
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
