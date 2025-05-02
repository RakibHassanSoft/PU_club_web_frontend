import React, { useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import useAxiosData from '../../hook/useAxiosData';

const AllSolvers = () => {
  const [topSolvers, setTopSolvers] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);

  // Use your custom hook for the main data fetching
  const { data, loading, error } = useAxiosData({
    secure: false,
    method: 'GET',
    endpoint: '/auth/top/cf',
  });

  useEffect(() => {
    const fetchProfileImages = async () => {
      if (!data || !Array.isArray(data)) return;

      try {
        const enrichedData = await Promise.all(
          data.map(async (solver) => {
            try {
              const res = await fetch(
                `https://codeforces.com/api/user.info?handles=${solver.handle}`
              );
              const json = await res.json();
              const photo = json.result[0]?.titlePhoto || null;
              return { ...solver, profileImage: photo };
            } catch {
              return { ...solver, profileImage: null };
            }
          })
        );
        setTopSolvers(enrichedData);
      } catch (err) {
        console.error('Error enriching solvers:', err);
      } finally {
        setLoadingImages(false);
      }
    };

    if (data) {
      fetchProfileImages();
    }
  }, [data]);

  if (loading || loadingImages) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error fetching solvers: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-orange-400 mb-12">
        🔥 Today's Top Codeforces Solvers 🔥
      </h1>

      {topSolvers.length === 0 ? (
        <div className="text-center text-gray-400 text-xl">No solvers for today yet.</div>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {topSolvers.map((solver, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl border border-orange-400 hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="relative flex items-center gap-5">
                  {index < 3 && (
                    <FaTrophy
                      size={40}
                      className={`${
                        index === 0
                          ? 'text-yellow-400'
                          : index === 1
                          ? 'text-gray-300'
                          : 'text-orange-500'
                      }`}
                    />
                  )}
                  <img
                    src={solver.profileImage || 'https://via.placeholder.com/100'}
                    alt={solver.handle}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{solver.handle}</h2>
                  <p className="text-md text-orange-500 font-medium">Rank #{index + 1}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-orange-300">{solver.totalSolvedToday} Solved</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSolvers;
