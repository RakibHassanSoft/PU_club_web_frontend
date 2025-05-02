import { useState } from "react";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import animationData from "../../../public/lottie-animation.json";
import { Link, useNavigate } from "react-router-dom";
import useAxiosData from "../../hook/useAxiosData";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useUser from "../../hook/useUser";

const Login = () => {
  const { isAdmin, loading: userLoading, error: userError, refetch } = useUser();

  const axiosInstance = useAxiosPublic();
  const navigation = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { data, loading, error, mutate } = useAxiosData({
    secure: false, // Public API
    method: "POST",
    endpoint: "/auth/login",
  });
  // console.log(data);

  loading && <p>Loading...</p>;
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
  
    try {
      const res = await axiosInstance.post("/auth/login", loginData); // Replace with your actual base URL
  
      const data = res.data;
      refetch(); // Refetch user data after login
      if (data.isVerified) {
        sessionStorage.setItem("userEmail", data.email);
  
        Swal.fire({
          title: "Login Successful",
          text: `Welcome, ${data?.fullName || "Buddy"}!`,
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          navigation("/");
        });
      } else {
        Swal.fire({
          title: "Login Failed",
          text: "Your account is not verified yet.",
          icon: "warning",
          confirmButtonText: "Okay",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Login Failed",
        text: err.response?.data?.error || "Something went wrong, please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };
  

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r lg:px-4 ">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg  max-w-5xl w-full overflow-hidden  shadow-xl">
        {/* Animation Section */}
        <div className=" bg-gradient-to-r from-red-500 to-red-800 w-full  md:w-1/2 flex items-center justify-center p-6">
          <Lottie
            options={lottieOptions}
            loop={true}
            className="w-full  max-w-md"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 pl-4 pr-4 lg:pl-6 lg:pr-6">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-2">
            PU Programming Club
          </h2>
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8 ">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-red-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-red-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-gray-600 mt-4 text-center">
            {/* <p>
              Forgot password?{" "}
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                Reset
              </span>
            </p> */}
            <p className="mt-2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-red-600 font-semibold hover:underline cursor-pointer"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
