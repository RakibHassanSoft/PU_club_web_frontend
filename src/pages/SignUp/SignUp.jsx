import { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    puId: '',
    codeforcesHandle: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-red-50 w-full max-w-md p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Sign Up - PU Problem Solving Club
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-red-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-1 text-red-700 font-medium">PU Student ID</label>
            <input
              type="text"
              name="puId"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="PU123456"
            />
          </div>

          <div>
            <label className="block mb-1 text-red-700 font-medium">Codeforces Handle</label>
            <input
              type="text"
              name="codeforcesHandle"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="codeforces_user"
            />
          </div>

          <div>
            <label className="block mb-1 text-red-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="john@example.com"
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

          <div>
            <label className="block mb-1 text-red-700 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
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
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already a member?{' '}
          <span className="text-red-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default Signup;
