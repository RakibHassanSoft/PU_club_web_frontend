import React from 'react';
import { FaRocket, FaRegDotCircle } from 'react-icons/fa';

// Define level colors for difficulty
const levelColors = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Hard: 'bg-red-100 text-red-800',
};

// Codeforces Levels by Rating Range
const codeforcesRatingLevels = {
  '1200-1400': [
    {
      title: 'Fundamentals: Time and Space Complexity',
      difficulty: 'Easy',
      topics: [
        'Big-O Notation',
        'Arrays and Strings',
        'Basic Math',
        'Prefix Sum & Sliding Window',
      ],
      problemsToSolve: 50,
      color: 'bg-gradient-to-r from-green-300 via-green-200 to-green-100',
    },
    {
      title: 'Sorting & Searching Algorithms',
      difficulty: 'Easy',
      topics: [
        'Bubble Sort, Insertion Sort',
        'Binary Search',
        'Linear Search',
      ],
      problemsToSolve: 60,
      color: 'bg-gradient-to-r from-green-300 via-green-200 to-green-100',
    },
  ],
  '1400-1600': [
    {
      title: 'Intermediate Data Structures',
      difficulty: 'Medium',
      topics: [
        'Stacks, Queues, Deques',
        'Trees & Binary Search Trees',
        'Graph Traversal (BFS, DFS)',
      ],
      problemsToSolve: 80,
      color: 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100',
    },
    {
      title: 'Dynamic Programming & Greedy Algorithms',
      difficulty: 'Medium',
      topics: [
        'Knapsack Problem',
        'Longest Increasing Subsequence',
        'Coin Change Problem',
      ],
      problemsToSolve: 90,
      color: 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100',
    },
  ],
  '1600-1900': [
    {
      title: 'Advanced Graph Algorithms',
      difficulty: 'Hard',
      topics: [
        'Shortest Path (Dijkstra, Floyd-Warshall)',
        'Minimum Spanning Tree (Prim, Kruskal)',
        'Topological Sort',
      ],
      problemsToSolve: 110,
      color: 'bg-gradient-to-r from-red-300 via-red-200 to-red-100',
    },
    {
      title: 'Advanced Dynamic Programming',
      difficulty: 'Hard',
      topics: [
        'Tree DP, Segment Tree DP',
        'Bitmasking & DP',
        'Advanced Coin Problem (Multiple Constraints)',
      ],
      problemsToSolve: 120,
      color: 'bg-gradient-to-r from-red-300 via-red-200 to-red-100',
    },
  ],
};

// ICPC Levels
const icpcLevels = [
  {
    title: 'Level 1: Introduction to Algorithms',
    difficulty: 'Easy',
    topics: [
      'Sorting Algorithms',
      'Graphs Basics',
      'Recursion',
      'Basic Dynamic Programming',
      'Greedy Algorithms',
    ],
    problemsToSolve: 100,
    color: 'bg-gradient-to-r from-green-300 via-green-200 to-green-100',
  },
  {
    title: 'Level 2: Data Structures & Algorithms',
    difficulty: 'Medium',
    topics: [
      'Segment Trees',
      'Trie Structures',
      'Graph Algorithms (Dijkstra, Floyd-Warshall)',
      'Dynamic Programming (Knapsack, LIS)',
      'Combinatorics & Number Theory',
    ],
    problemsToSolve: 120,
    color: 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100',
  },
  {
    title: 'Level 3: Advanced Problem Solving',
    difficulty: 'Medium',
    topics: [
      'Advanced Graph Algorithms',
      'Dynamic Programming on Trees',
      'Game Theory',
      'Heavy-Light Decomposition',
      'String Algorithms (Suffix Array, LCP)',
    ],
    problemsToSolve: 140,
    color: 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100',
  },
  {
    title: 'Level 4: Mastery Level',
    difficulty: 'Hard',
    topics: [
      'Advanced Dynamic Programming (Tree DP, Bitmask DP)',
      'Sieve Algorithms',
      'Advanced String Algorithms',
      'Advanced Graph Theory (MST, Flow)',
      'Mathematics (Modular Arithmetic, GCD)',
    ],
    problemsToSolve: 160,
    color: 'bg-gradient-to-r from-red-300 via-red-200 to-red-100',
  },
];

// Component for Codeforces Levels
const CodeforcesLevel = ({ title, difficulty, topics, problemsToSolve, color }) => (
  <div
    className={`transition duration-300 transform hover:scale-105 rounded-xl p-6 mb-8 shadow-xl ${color} min-h-[20rem]`} // Adjust min height here
  >
    <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${levelColors[difficulty]}`}>
      <FaRegDotCircle className="inline-block mr-1" /> {difficulty}
    </span>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {topics.map((topic, i) => (
        <li key={i}>{topic}</li>
      ))}
    </ul>
    <p className="mt-4 text-sm text-gray-600 font-medium">
      Solve at least <span className="text-gray-900 font-bold">{problemsToSolve} problems</span> to master this level.
    </p>
  </div>
);


// Component for ICPC Levels
const ICPCLevel = ({ title, difficulty, topics, problemsToSolve, color }) => (
  <div
    className={`transition duration-300 transform hover:scale-105 rounded-xl p-6 mb-8 shadow-xl ${color}`}
  >
    <h3 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h3>
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${levelColors[difficulty]}`}>
      <FaRegDotCircle className="inline-block mr-1" /> {difficulty}
    </span>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {topics.map((topic, i) => (
        <li key={i}>{topic}</li>
      ))}
    </ul>
    <p className="mt-4 text-sm text-gray-600 font-medium">
      Solve at least <span className="text-gray-900 font-bold">{problemsToSolve} problems</span> to master this level.
    </p>
  </div>
);

// Main DSA Roadmap Component
const DSARoadmap = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-gray-800 mb-20">
          <FaRocket className="inline-block mr-2 text-blue-500" /> DSA Roadmap for Codeforces & ICPC
        </h1>

        {/* Codeforces Roadmap */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-2">
            Codeforces Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(codeforcesRatingLevels).map((ratingRange) => (
              <div key={ratingRange}>
                <h3 className="text-3xl font-semibold text-gray-700 mb-6">
                  Rating {ratingRange} Roadmap
                </h3>
                {codeforcesRatingLevels[ratingRange].map((level, idx) => (
                  <CodeforcesLevel key={idx} {...level} />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ICPC Roadmap */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-2">
            ICPC Roadmap
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
            {icpcLevels.map((level, idx) => (
              <ICPCLevel key={idx} {...level} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DSARoadmap;
