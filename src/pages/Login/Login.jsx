import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/lottie-animation.json';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', loginData);
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r lg:px-4 ">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg  max-w-5xl w-full overflow-hidden  shadow-xl">
        
        {/* Animation Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 bg-gradient-to-r from-red-500 to-red-800">
          <Lottie options={lottieOptions} height={400} width={450} />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
            Login - PU Programming Solving Club
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-red-700 font-medium">Email</label>
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
              <label className="block mb-1 text-red-700 font-medium">Password</label>
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
            <p>
              Forgot password?{' '}
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                Reset
              </span>
            </p>
            <p className="mt-2">
              Don't have an account?{' '}
              <Link to="/signup" className="text-red-600 font-semibold hover:underline cursor-pointer">
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
