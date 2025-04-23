import React, { useState } from 'react';

const getBadgeColor = (rating) => {
  if (rating >= 2400) return 'bg-yellow-500 text-black';
  if (rating >= 1900) return 'bg-purple-600 text-white';
  if (rating >= 1600) return 'bg-blue-500 text-white';
  if (rating >= 1200) return 'bg-green-500 text-white';
  return 'bg-gray-300 text-black';
};

const dummyData = [
  {
    id: 1, fullName: 'Rakib Hasan', studentId: 'STU1001', cfHandle: 'rakib123', cfRating: 2100, totalContests: 50,
    lastContest: { name: 'Div 2 #900', rank: 120 }, problemsSolved: 540
  },
  {
    id: 2, fullName: 'Sarah Ahmed', studentId: 'STU1002', cfHandle: 'sarah_a', cfRating: 1850, totalContests: 43,
    lastContest: { name: 'Div 2 #899', rank: 89 }, problemsSolved: 480
  },
  {
    id: 3, fullName: 'Zahin Rahman', studentId: 'STU1003', cfHandle: 'zahinR', cfRating: 1450, totalContests: 35,
    lastContest: { name: 'Div 3 #450', rank: 212 }, problemsSolved: 320
  },
  {
    id: 4, fullName: 'Tania Sultana', studentId: 'STU1004', cfHandle: 'tanias', cfRating: 1200, totalContests: 20,
    lastContest: { name: 'Div 3 #449', rank: 310 }, problemsSolved: 250
  },
  {
    id: 5, fullName: 'Imran Kabir', studentId: 'STU1005', cfHandle: 'imran_91', cfRating: 1600, totalContests: 38,
    lastContest: { name: 'Div 2 #888', rank: 105 }, problemsSolved: 410
  },
  {
    id: 6, fullName: 'Raisa Noor', studentId: 'STU1006', cfHandle: 'raisa_n', cfRating: 1350, totalContests: 28,
    lastContest: { name: 'Div 3 #448', rank: 185 }, problemsSolved: 305
  },
  {
    id: 7, fullName: 'Tanvir Mahmud', studentId: 'STU1007', cfHandle: 'tanvirM', cfRating: 2300, totalContests: 55,
    lastContest: { name: 'Div 1 #100', rank: 70 }, problemsSolved: 590
  },
  {
    id: 8, fullName: 'Jannat Hossain', studentId: 'STU1008', cfHandle: 'jannat_coder', cfRating: 1700, totalContests: 41,
    lastContest: { name: 'Div 2 #870', rank: 132 }, problemsSolved: 460
  },
  {
    id: 9, fullName: 'Fahim Uddin', studentId: 'STU1009', cfHandle: 'fahim09', cfRating: 950, totalContests: 10,
    lastContest: { name: 'Div 3 #400', rank: 412 }, problemsSolved: 160
  },
  {
    id: 10, fullName: 'Nadia Haque', studentId: 'STU1010', cfHandle: 'nadiaHQ', cfRating: 1980, totalContests: 48,
    lastContest: { name: 'Div 2 #899', rank: 100 }, problemsSolved: 490
  },
];

export default function Leaderboard() {
  const [sortOrder, setSortOrder] = useState('desc');

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedData = [...dummyData].sort((a, b) => {
    return sortOrder === 'asc' ? a.cfRating - b.cfRating : b.cfRating - a.cfRating;
  });

  return (
    <div className="min-h-screen bg-white max-w-7xl m-auto p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🏆 Public Leaderboard</h1>

      <div className="overflow-x-auto border border-red-300 rounded-lg">
        <table className="min-w-full text-sm text-center">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Full Name</th>
              {/* <th className="py-3 px-4">Student ID</th> */}
              <th className="py-3 px-4">CF Handle</th>
              <th className="py-3 px-4 cursor-pointer" onClick={toggleSort}>
                Rating {sortOrder === 'asc' ? '🔼' : '🔽'}
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
                {/* <td className="py-2 px-4">{student.studentId}</td> */}
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
                  <span className={`py-1 px-2 rounded-full text-xs font-bold ${getBadgeColor(student.cfRating)}`}>
                    {student.cfRating}
                  </span>
                </td>
                <td className="py-2 px-4">{student.totalContests}</td>
                <td className="py-2 px-4">{student.lastContest.name} (Rank {student.lastContest.rank})</td>
                <td className="py-2 px-4">{student.problemsSolved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
