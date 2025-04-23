import { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login Submitted:', loginData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-red-50 w-full max-w-md p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Login - PU Problem Solving Club
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-red-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
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
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
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
            <span className="text-red-600 font-semibold hover:underline cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
