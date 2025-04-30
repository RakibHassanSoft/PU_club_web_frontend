import React, { useState, useMemo } from "react";
import useAxiosData from "../../hook/useAxiosData";

const getBadgeColor = (rating) => {
  if (rating >= 2400) return "bg-yellow-500 text-black";
  if (rating >= 1900) return "bg-purple-600 text-white";
  if (rating >= 1600) return "bg-blue-500 text-white";
  if (rating >= 1200) return "bg-green-500 text-white";
  return "bg-gray-300 text-black";
};

export default function Leaderboard() {
  const [sortOrder, setSortOrder] = useState("desc");

  const { data, loading, error } = useAxiosData({
    secure: false, // Public API
    method: "GET",
    endpoint: "/auth/codeforces/stats",
  });

  const formattedStudents = useMemo(() => {
    if (!data) return [];
    return data.map((user, index) => ({
      id: index + 1,
      fullName: user.fullName || user.handle,
      cfHandle: user.handle,
      cfRating: user.rating,
      totalContests: user.contestsParticipated,
      lastContest: {
        name: user.lastContest?.contestName || "N/A",
        rank: user.lastContest?.rank || "N/A",
      },
      problemsSolved: user.totalSolved,
    }));
  }, [data]);

  const sortedData = useMemo(() => {
    return [...formattedStudents].sort((a, b) =>
      sortOrder === "asc" ? a.cfRating - b.cfRating : b.cfRating - a.cfRating
    );
  }, [formattedStudents, sortOrder]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

   if (data.length === 0) {
    return (
      <div className="min-h-screen bg-white max-w-7xl m-auto p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          🏆 Public Leaderboard
        </h1>
        <div className="text-red-500 font-semibold">No data available.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white max-w-7xl m-auto p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        🏆 Public Leaderboard
      </h1>

      {loading && (
        <div className="overflow-x-auto border border-red-300 rounded-lg animate-pulse">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Full Name</th>
                <th className="py-3 px-4">CF Handle</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Contests</th>
                <th className="py-3 px-4">Last Contest</th>
                <th className="py-3 px-4">Solved</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} className="odd:bg-red-50 even:bg-white">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <td key={i} className="py-2 px-4">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && (
        <div className="text-red-500 font-semibold">
          Failed to load leaderboard.
        </div>
      )}

      {!loading && !error && (
        <div className="overflow-x-auto border border-red-300 rounded-lg">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Full Name</th>
                <th className="py-3 px-4">CF Handle</th>
                <th className="py-3 px-4 cursor-pointer" onClick={toggleSort}>
                  Rating {sortOrder === "asc" ? "🔼" : "🔽"}
                </th>
                <th className="py-3 px-4">Contests</th>
                <th className="py-3 px-4">Last Contest</th>
                <th className="py-3 px-4">Solved</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((student, index) => (
                <tr key={student.id} className="odd:bg-red-50 even:bg-white">
                  <td className="py-2 px-4 font-semibold">{index + 1}</td>
                  <td className="py-2 px-4">{student.fullName}</td>
                  <td className="py-2 px-4">
                    <a
                      href={`https://codeforces.com/profile/${student.cfHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 underline"
                    >
                      {student.cfHandle}
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`py-1 px-2 rounded-full text-xs font-bold ${getBadgeColor(
                        student.cfRating
                      )}`}
                    >
                      {student.cfRating}
                    </span>
                  </td>
                  <td className="py-2 px-4">{student.totalContests}</td>
                  <td className="py-2 px-4">
                    {student.lastContest.name} (Rank {student.lastContest.rank})
                  </td>
                  <td className="py-2 px-4">{student.problemsSolved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
