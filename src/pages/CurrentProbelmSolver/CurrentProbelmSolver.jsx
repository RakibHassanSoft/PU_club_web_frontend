//http://localhost:5000/api/v1/auth/top/cf
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPage4, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hook/useAxiosPublic';

const CurrentProblemSolver = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [topSolvers, setTopSolvers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosInstance = useAxiosPublic()
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  useEffect(() => {
    const fetchTopSolvers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/auth/top/cf');
        // console.log(response)

        setTopSolvers(response.data); // assuming data is an array
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSolvers();
  }, []);

  return (
    <div className="fixed top-40 right-1 z-[9999]">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="bg-orange-500 text-white rounded-full px-4 py-2 shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-red-800"
        >
          Today
        </button>

        {showDropdown && (
          <div className="absolute top-full mt-2 right-0 w-72 bg-white shadow-xl rounded-lg p-4 max-h-96 overflow-y-auto z-50">
            {loading ? (
              <div className="px-4 py-2 text-green-500 text-center font-bold">Loading...</div>
            ) : error ? (
              <div className="px-4 py-2 text-red-500">Show letter</div>
            ) : topSolvers.length === 0 ? (
              <div className="px-4 py-2 text-gray-500">No solvers for today yet</div>
            ) : (
              topSolvers.map((solver, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2 p-3 rounded-lg border-2 border-transparent hover:border-orange-500 hover:shadow-md hover:scale-105 transform transition-all"
                  style={{ animation: index === 0 ? 'shineEffect 1s infinite' : 'none' }}
                >
                  {index === 0 && (
                    <FaTrophy size={24} className="text-yellow-500 mr-2" />
                  )}
                  <span>{solver.handle}</span>
                  <span className="font-bold text-red-600">{solver.totalSolvedToday} solved</span>
                </div>
              ))
            )}

            <Link to="/all-solvers" onClick={toggleDropdown} className="block text-center">
              <div className="flex items-center justify-center gap-3 mt-4 p-3 bg-orange-500 text-white hover:bg-orange-600 transition duration-300 rounded-full ">
                <FaPage4 className='text-xl'></FaPage4>
                See all
              </div>
            </Link>
          </div>
        )}
      </div>

      <style jsx="true">{`
        @keyframes shineEffect {
          0% {
            border-color: transparent;
          }
          50% {
            border-color: #ff7f00;
            box-shadow: 0 0 10px rgba(255, 127, 0, 0.7);
          }
          100% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default CurrentProblemSolver;
