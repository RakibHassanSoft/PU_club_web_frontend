import React from "react";
import { Link } from "react-router-dom";

const problemsData = {
  "Graphs (BFS, DFS)": [
    {
      name: "Number of Islands",
      link: "https://leetcode.com/problems/number-of-islands/",
      id: 200,
    },
    {
      name: "Word Ladder II",
      link: "https://leetcode.com/problems/word-ladder-ii/",
      id: 126,
    },
    {
      name: "Clone Graph",
      link: "https://leetcode.com/problems/clone-graph/",
      id: 133,
    },
    {
      name: "Course Schedule II",
      link: "https://leetcode.com/problems/course-schedule-ii/",
      id: 210,
    },
    {
      name: "Pacific Atlantic Water Flow",
      link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      id: 417,
    },
    {
      name: "Max Area of Island",
      link: "https://leetcode.com/problems/max-area-of-island/",
      id: 695,
    },
    {
      name: "Surrounded Regions",
      link: "https://leetcode.com/problems/surrounded-regions/",
      id: 130,
    },
    {
      name: "Alien Dictionary",
      link: "https://leetcode.com/problems/alien-dictionary/",
      id: 269,
    },
    {
      name: "Shortest Path in Binary Matrix",
      link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      id: 1091,
    },
    {
      name: "Number of Connected Components in an Undirected Graph",
      link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      id: 323,
    },
    {
      name: "Graph Valid Tree",
      link: "https://leetcode.com/problems/graph-valid-tree/",
      id: 261,
    },
    {
      name: "Word Ladder",
      link: "https://leetcode.com/problems/word-ladder/",
      id: 127,
    },
    {
      name: "Cheapest Flights Within K Stops",
      link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      id: 787,
    },
    {
      name: "Keys and Rooms",
      link: "https://leetcode.com/problems/keys-and-rooms/",
      id: 841,
    },
    {
      name: "Redundant Connection",
      link: "https://leetcode.com/problems/redundant-connection/",
      id: 684,
    },
    {
      name: "Critical Connections in a Network",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      id: 1192,
    },
    {
      name: "Longest Path in a Matrix with Given Constraints",
      link: "https://leetcode.com/problems/longest-path-in-a-matrix-with-given-constraints/",
      id: 1293,
    },
    {
      name: "Articulation Points",
      link: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
      id: null,
    },
    {
      name: "Find the number of ways to reach a destination in a directed acyclic graph",
      link: "https://leetcode.com/problems/find-the-number-of-ways-to-reach-a-destination-in-a-directed-acyclic-graph/",
      id: 1510,
    },
    {
      name: "Minimum Spanning Tree (Prim’s Algorithm)",
      link: "https://leetcode.com/problems/minimum-spanning-tree-prims-algorithm/",
      id: 1135,
    },
  ],
  "Disjoint Set Union (DSU)": [
    {
      name: "Number of Provinces",
      link: "https://leetcode.com/problems/number-of-provinces/",
      id: 547,
    },
    {
      name: "Friend Circles",
      link: "https://leetcode.com/problems/friend-circles/",
      id: 547,
    },
    {
      name: "Accounts Merge",
      link: "https://leetcode.com/problems/accounts-merge/",
      id: 721,
    },
    {
      name: "Longest Consecutive Sequence",
      link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      id: 128,
    },
    {
      name: "Union Find Problem",
      link: "https://codeforces.com/problemset/problem/1208/E",
      id: null,
    },
    {
      name: "Connected Components in a Graph",
      link: "https://www.geeksforgeeks.org/connected-components-in-a-graph/",
      id: null,
    },
    {
      name: "Kruskals Algorithm for Minimum Spanning Tree",
      link: "https://leetcode.com/problems/minimum-spanning-tree-prims-algorithm/",
      id: 1135,
    },
    {
      name: "Minimum Cost to Connect Sticks",
      link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
      id: 1167,
    },
    {
      name: "Is Graph Bipartite?",
      link: "https://leetcode.com/problems/is-graph-bipartite/",
      id: 785,
    },
    {
      name: "Implement Union-Find with Path Compression and Union by Rank",
      link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      id: 323,
    },
    {
      name: "Number of Connected Components in an Undirected Graph",
      link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      id: 323,
    },
    {
      name: "Redundant Connection II",
      link: "https://leetcode.com/problems/redundant-connection-ii/",
      id: 684,
    },
    {
      name: "Largest Component Size by Common Factor",
      link: "https://leetcode.com/problems/largest-component-size-by-common-factor/",
      id: 952,
    },
    {
      name: "Equations Possible",
      link: "https://leetcode.com/problems/equations-possible/",
      id: 990,
    },
    {
      name: "Maximal Network Rank",
      link: "https://leetcode.com/problems/maximal-network-rank/",
      id: 1615,
    },
    {
      name: "The Earliest Moment When Everyone Becomes Friends",
      link: "https://leetcode.com/problems/the-earliest-moment-when-everyone-becomes-friends/",
      id: 1319,
    },
    {
      name: "Smallest String With Swaps",
      link: "https://leetcode.com/problems/smallest-string-with-swaps/",
      id: 1202,
    },
    {
      name: "Add and Search Word - Data structure design",
      link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      id: 211,
    },
    {
      name: "Jump Game III",
      link: "https://leetcode.com/problems/jump-game-iii/",
      id: 1306,
    },
    {
      name: "Graph Components with Similarities",
      link: "https://www.geeksforgeeks.org/graph-components-with-similarities/",
      id: null,
    },
  ],
  "Dynamic Programming Basics": [
    {
      name: "Longest Increasing Subsequence",
      link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      id: 300,
    },
    {
      name: "0/1 Knapsack Problem",
      link: "https://www.geeksforgeeks.org/0-1-knapsack-problem/",
      id: null,
    },
    {
      name: "Unique Paths",
      link: "https://leetcode.com/problems/unique-paths/",
      id: 62,
    },
    {
      name: "Climbing Stairs",
      link: "https://leetcode.com/problems/climbing-stairs/",
      id: 70,
    },
    {
      name: "Coin Change",
      link: "https://leetcode.com/problems/coin-change/",
      id: 322,
    },
    {
      name: "Minimum Path Sum",
      link: "https://leetcode.com/problems/minimum-path-sum/",
      id: 64,
    },
    {
      name: "Edit Distance",
      link: "https://leetcode.com/problems/edit-distance/",
      id: 72,
    },
    {
      name: "House Robber",
      link: "https://leetcode.com/problems/house-robber/",
      id: 198,
    },
    {
      name: "Best Time to Buy and Sell Stock II",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      id: 122,
    },
    {
      name: "Longest Common Subsequence",
      link: "https://leetcode.com/problems/longest-common-subsequence/",
      id: 1143,
    },
    {
      name: "Maximal Square",
      link: "https://leetcode.com/problems/maximal-square/",
      id: 221,
    },
    {
      name: "Palindromic Substrings",
      link: "https://leetcode.com/problems/palindromic-substrings/",
      id: 647,
    },
    {
      name: "Word Break II",
      link: "https://leetcode.com/problems/word-break-ii/",
      id: 140,
    },
    {
      name: "Jump Game II",
      link: "https://leetcode.com/problems/jump-game-ii/",
      id: 45,
    },
    {
      name: "Partition Equal Subset Sum",
      link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      id: 416,
    },
    {
      name: "House Robber II",
      link: "https://leetcode.com/problems/house-robber-ii/",
      id: 213,
    },
    {
      name: "Regular Expression Matching",
      link: "https://leetcode.com/problems/regular-expression-matching/",
      id: 10,
    },
    {
      name: "Burst Balloons",
      link: "https://leetcode.com/problems/burst-balloons/",
      id: 312,
    },
    {
      name: "Matrix Chain Multiplication",
      link: "https://www.geeksforgeeks.org/matrix-chain-multiplication/",
      id: null,
    },
    {
      name: "Longest Palindromic Substring",
      link: "https://leetcode.com/problems/longest-palindromic-substring/",
      id: 5,
    },
  ],
  "Greedy Algorithms": [
    {
      name: "Activity Selection Problem",
      link: "https://www.geeksforgeeks.org/activity-selection-problem/",
      id: null,
    },
    {
      name: "Huffman Coding",
      link: "https://www.geeksforgeeks.org/huffman-coding/",
      id: null,
    },
    {
      name: "Minimum Number of Platforms Required",
      link: "https://www.geeksforgeeks.org/minimum-number-of-platforms-required-for-a-railway/",
      id: null,
    },
    {
      name: "Fractional Knapsack Problem",
      link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
      id: null,
    },
    {
      name: "Job Sequencing Problem",
      link: "https://www.geeksforgeeks.org/job-sequencing-problem/",
      id: null,
    },
    {
      name: "Greedy Coloring",
      link: "https://www.geeksforgeeks.org/greedy-algorithm-coloring/",
      id: null,
    },
    {
      name: "Minimum Spanning Tree (Kruskal’s Algorithm)",
      link: "https://www.geeksforgeeks.org/kruskal-algorithm-for-minimum-spanning-tree/",
      id: null,
    },
    {
      name: "Interval Scheduling Maximization",
      link: "https://www.geeksforgeeks.org/interval-scheduling-maximization/",
      id: null,
    },
    {
      name: "Greedy Set Cover",
      link: "https://www.geeksforgeeks.org/greedy-algorithm-set-cover-problem/",
      id: null,
    },
    {
      name: "Maximum Product Subarray",
      link: "https://leetcode.com/problems/maximum-product-subarray/",
      id: 152,
    },
    {
      name: "Candy Distribution",
      link: "https://leetcode.com/problems/candy/",
      id: 135,
    },
    {
      name: "Find Minimum in Rotated Sorted Array",
      link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      id: 153,
    },
    {
      name: "Gas Station",
      link: "https://leetcode.com/problems/gas-station/",
      id: 134,
    },
  ],
};

const Level3 = () => {
  return (
    <div className="bg-white max-w-7xl m-auto text-red-600 py-12 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6">
        Level 3 : Graphs & DP Mastery
      </h2>

      {Object.entries(problemsData).map(([category, problems]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-semibold text-red-600 mb-6">
            {category}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <Link>
              <li
                key={problem.id}
                className="bg-white border-2 border-transparent p-6 rounded-3xl shadow-lg hover:bg-white hover:border-red-600 hover:text-red-600 hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                <span
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg"
                >
                  {problem.name}
                </span>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Level3;
