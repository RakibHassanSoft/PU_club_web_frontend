import React from "react";
import { Link } from "react-router-dom";

const levels = [
  {
    name: "Level 1: Beginner",
    description:
      "Get comfortable with basic data structures and problem-solving on Codeforces. Practice standard patterns like loops, conditionals, arrays, and strings.",
    topics: [
      {
        name: "Two Pointers",
        problems: [
          {
            title: "Easy: Subarray Sum",
            link: "https://codeforces.com/problemset/problem/1/A",
          },
          {
            title: "Easy: Partition",
            link: "https://codeforces.com/problemset/problem/159/A",
          },
          {
            title: "Easy: Sorting Pairs",
            link: "https://codeforces.com/problemset/problem/288/A",
          },
          {
            title: "Medium: Balanced Array",
            link: "https://codeforces.com/problemset/problem/118/A",
          },
          {
            title: "Medium: Max Subarray",
            link: "https://codeforces.com/problemset/problem/129/A",
          },
          {
            title: "Medium: Sequence Optimization",
            link: "https://codeforces.com/problemset/problem/334/A",
          },
          {
            title: "Hard: Equal Sum Subarrays",
            link: "https://codeforces.com/problemset/problem/521/A",
          },
          {
            title: "Hard: Sliding Window for Max",
            link: "https://codeforces.com/problemset/problem/102/A",
          },
          {
            title: "Hard: Subarray Range",
            link: "https://codeforces.com/problemset/problem/507/A",
          },
          {
            title: "Hard: Count Palindromes",
            link: "https://codeforces.com/problemset/problem/578/A",
          },
          {
            title: "Easy: Two Sum",
            link: "https://leetcode.com/problems/two-sum/",
          },
          {
            title: "Medium: Longest Substring Without Repeating Characters",
            link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          },
          {
            title: "Medium: Merge Intervals",
            link: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            title: "Easy: Reverse Integer",
            link: "https://leetcode.com/problems/reverse-integer/",
          },
          {
            title: "Medium: Container With Most Water",
            link: "https://leetcode.com/problems/container-with-most-water/",
          },
          {
            title: "Medium: 3Sum",
            link: "https://leetcode.com/problems/3sum/",
          },
          {
            title: "Hard: Median of Two Sorted Arrays",
            link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          },
          {
            title: "Hard: Trapping Rain Water",
            link: "https://leetcode.com/problems/trapping-rain-water/",
          },
          {
            title: "Hard: Sudoku Solver",
            link: "https://leetcode.com/problems/sudoku-solver/",
          },
          {
            title: "Hard: Word Ladder II",
            link: "https://leetcode.com/problems/word-ladder-ii/",
          },
        ],
      },
      {
        name: "Sliding Window",
        problems: [
          {
            title: "Easy: Subarray Sum",
            link: "https://codeforces.com/problemset/problem/1/A",
          },
          {
            title: "Easy: Partition",
            link: "https://codeforces.com/problemset/problem/159/A",
          },
          {
            title: "Easy: Sorting Pairs",
            link: "https://codeforces.com/problemset/problem/288/A",
          },
          {
            title: "Medium: Balanced Array",
            link: "https://codeforces.com/problemset/problem/118/A",
          },
          {
            title: "Medium: Max Subarray",
            link: "https://codeforces.com/problemset/problem/129/A",
          },
          {
            title: "Medium: Sequence Optimization",
            link: "https://codeforces.com/problemset/problem/334/A",
          },
          {
            title: "Hard: Equal Sum Subarrays",
            link: "https://codeforces.com/problemset/problem/521/A",
          },
          {
            title: "Hard: Sliding Window for Max",
            link: "https://codeforces.com/problemset/problem/102/A",
          },
          {
            title: "Hard: Subarray Range",
            link: "https://codeforces.com/problemset/problem/507/A",
          },
          {
            title: "Hard: Count Palindromes",
            link: "https://codeforces.com/problemset/problem/578/A",
          },
          {
            title: "Easy: Max Subarray",
            link: "https://codeforces.com/problemset/problem/380/A",
          },
          {
            title: "Easy: Find All Substrings",
            link: "https://codeforces.com/problemset/problem/358/A",
          },
          {
            title: "Easy: Subarray Sum",
            link: "https://codeforces.com/problemset/problem/146/A",
          },
          {
            title: "Medium: Min Cost",
            link: "https://codeforces.com/problemset/problem/112/A",
          },
          {
            title: "Medium: Subarray Product",
            link: "https://codeforces.com/problemset/problem/107/A",
          },
          {
            title: "Medium: Unique Characters",
            link: "https://codeforces.com/problemset/problem/601/A",
          },
          {
            title: "Hard: Longest Substring",
            link: "https://codeforces.com/problemset/problem/495/A",
          },
          {
            title: "Hard: Distinct Subarrays",
            link: "https://codeforces.com/problemset/problem/1234/A",
          },
          {
            title: "Hard: Equal Subarrays",
            link: "https://codeforces.com/problemset/problem/176/B",
          },
          {
            title: "Hard: Subarray with Maximum Product",
            link: "https://codeforces.com/problemset/problem/679/A",
          },
        ],
      },
      {
        name: "Bit Manipulation",
        problems: [
          {
            title: "Easy: Odd or Even",
            link: "https://codeforces.com/problemset/problem/156/A",
          },
          {
            title: "Easy: Count Set Bits",
            link: "https://codeforces.com/problemset/problem/211/A",
          },
          {
            title: "Easy: Even or Odd Sum",
            link: "https://codeforces.com/problemset/problem/459/A",
          },
          {
            title: "Medium: Xor Sequence",
            link: "https://codeforces.com/problemset/problem/273/B",
          },
          {
            title: "Medium: Bitwise AND",
            link: "https://codeforces.com/problemset/problem/112/A",
          },
          {
            title: "Medium: Bitwise OR",
            link: "https://codeforces.com/problemset/problem/255/A",
          },
          {
            title: "Hard: XOR and Maximum Subarray",
            link: "https://codeforces.com/problemset/problem/354/C",
          },
          {
            title: "Hard: Bitwise Operations",
            link: "https://codeforces.com/problemset/problem/125/C",
          },
          {
            title: "Hard: Subset Sum",
            link: "https://codeforces.com/problemset/problem/503/D",
          },
          {
            title: "Hard: Max XOR Subarray",
            link: "https://codeforces.com/problemset/problem/155/B",
          },
          {
            title: "Easy: XOR and OR",
            link: "https://codeforces.com/problemset/problem/203/A",
          },
          {
            title: "Easy: AND Product",
            link: "https://codeforces.com/problemset/problem/262/B",
          },
          {
            title: "Medium: XOR Trick",
            link: "https://codeforces.com/problemset/problem/536/A",
          },
          {
            title: "Medium: Find XOR of Range",
            link: "https://codeforces.com/problemset/problem/505/A",
          },
          {
            title: "Medium: Bitwise NOT",
            link: "https://codeforces.com/problemset/problem/216/A",
          },
          {
            title: "Medium: XOR Sum of Subarrays",
            link: "https://codeforces.com/problemset/problem/1178/A",
          },
          {
            title: "Hard: Minimum XOR of Two Numbers",
            link: "https://codeforces.com/problemset/problem/1069/B",
          },
          {
            title: "Hard: XOR based Dynamic Programming",
            link: "https://codeforces.com/problemset/problem/869/C",
          },
          {
            title: "Hard: Maximum XOR Pair",
            link: "https://codeforces.com/problemset/problem/155/D",
          },
          {
            title: "Hard: Range Bitwise OR",
            link: "https://codeforces.com/problemset/problem/167/C",
          },
        ],
      },
      {
        name: "Binary Search",
        problems: [
          {
            title: "Easy: Find the Target",
            link: "https://codeforces.com/problemset/problem/50/A",
          },
          {
            title: "Easy: Search in Sorted Array",
            link: "https://codeforces.com/problemset/problem/676/A",
          },
          {
            title: "Easy: Binary Search in List",
            link: "https://codeforces.com/problemset/problem/999/A",
          },
          {
            title: "Medium: Find Minimum in Sorted Array",
            link: "https://codeforces.com/problemset/problem/151/B",
          },
          {
            title: "Medium: Count Element Occurrences",
            link: "https://codeforces.com/problemset/problem/567/B",
          },
          {
            title: "Medium: Median Search",
            link: "https://codeforces.com/problemset/problem/482/A",
          },
          {
            title: "Hard: Kth Smallest Element",
            link: "https://codeforces.com/problemset/problem/230/C",
          },
          {
            title: "Hard: Largest Gap",
            link: "https://codeforces.com/problemset/problem/1035/D",
          },
          {
            title: "Hard: Minimum Distance",
            link: "https://codeforces.com/problemset/problem/871/A",
          },
          {
            title: "Hard: Binary Search with Backtracking",
            link: "https://codeforces.com/problemset/problem/147/C",
          },
          {
            title: "Easy: Binary Search for Min Element",
            link: "https://codeforces.com/problemset/problem/778/A",
          },
          {
            title: "Easy: Find Leftmost Element",
            link: "https://codeforces.com/problemset/problem/623/A",
          },
          {
            title: "Medium: Binary Search for Peak Element",
            link: "https://codeforces.com/problemset/problem/401/C",
          },
          {
            title: "Medium: Optimal Binary Search",
            link: "https://codeforces.com/problemset/problem/152/C",
          },
          {
            title: "Medium: Search for Median in Sorted Arrays",
            link: "https://codeforces.com/problemset/problem/122/A",
          },
          {
            title: "Hard: Binary Search in Infinite Array",
            link: "https://codeforces.com/problemset/problem/1286/C",
          },
          {
            title: "Hard: Binary Search in Matrix",
            link: "https://codeforces.com/problemset/problem/903/D",
          },
          {
            title: "Hard: Minimized Search Time",
            link: "https://codeforces.com/problemset/problem/1273/B",
          },
          {
            title: "Hard: Finding Kth Element in Range",
            link: "https://codeforces.com/problemset/problem/1338/C",
          },
          {
            title: "Hard: Search Optimization Problem",
            link: "https://codeforces.com/problemset/problem/193/B",
          },
        ],
      },
      {
        name: "Mathematics",
        problems: [
          {
            title: "Easy: Sum of Digits",
            link: "https://codeforces.com/problemset/problem/113/A",
          },
          {
            title: "Easy: Divisibility Test",
            link: "https://codeforces.com/problemset/problem/451/A",
          },
          {
            title: "Easy: Prime Number Check",
            link: "https://codeforces.com/problemset/problem/115/A",
          },
          {
            title: "Medium: Counting Divisors",
            link: "https://codeforces.com/problemset/problem/136/C",
          },
          {
            title: "Medium: GCD and LCM",
            link: "https://codeforces.com/problemset/problem/742/A",
          },
          {
            title: "Medium: Modular Arithmetic",
            link: "https://codeforces.com/problemset/problem/950/C",
          },
          {
            title: "Hard: Fermat’s Little Theorem",
            link: "https://codeforces.com/problemset/problem/132/C",
          },
          {
            title: "Hard: Linear Diophantine",
            link: "https://codeforces.com/problemset/problem/233/C",
          },
          {
            title: "Hard: Count Primes",
            link: "https://codeforces.com/problemset/problem/493/C",
          },
          {
            title: "Hard: Chinese Remainder Theorem",
            link: "https://codeforces.com/problemset/problem/358/B",
          },
          {
            title: "Medium: Find the Divisors",
            link: "https://codeforces.com/problemset/problem/625/B",
          },
          {
            title: "Medium: LCM and GCD Sum",
            link: "https://codeforces.com/problemset/problem/1242/D",
          },
          {
            title: "Medium: Modular Inverse",
            link: "https://codeforces.com/problemset/problem/1175/C",
          },
          {
            title: "Hard: Sieve of Eratosthenes for Primes",
            link: "https://codeforces.com/problemset/problem/509/D",
          },
          {
            title: "Hard: Finding Divisors Efficiently",
            link: "https://codeforces.com/problemset/problem/670/C",
          },
          {
            title: "Hard: GCD Query",
            link: "https://codeforces.com/problemset/problem/395/B",
          },
          {
            title: "Hard: Chinese Remainder Optimization",
            link: "https://codeforces.com/problemset/problem/143/C",
          },
          {
            title: "Hard: Primality Test for Large Numbers",
            link: "https://codeforces.com/problemset/problem/920/D",
          },
          {
            title: "Medium: Extended Euclidean Algorithm",
            link: "https://codeforces.com/problemset/problem/1092/A",
          },
          {
            title: "Medium: Fast Modular Exponentiation",
            link: "https://codeforces.com/problemset/problem/628/B",
          },
        ],
      },
      {
        name: "Arrays",
        problems: [
          {
            title: "Easy: Reverse Array",
            link: "https://codeforces.com/problemset/problem/437/A",
          },
          {
            title: "Easy: Rotate Array",
            link: "https://codeforces.com/problemset/problem/679/A",
          },
          {
            title: "Easy: Find Maximum",
            link: "https://codeforces.com/problemset/problem/1000/A",
          },
          {
            title: "Medium: Maximum Subarray",
            link: "https://codeforces.com/problemset/problem/380/A",
          },
          {
            title: "Medium: Kth Largest Element",
            link: "https://codeforces.com/problemset/problem/93/A",
          },
          {
            title: "Medium: Merge Arrays",
            link: "https://codeforces.com/problemset/problem/587/A",
          },
          {
            title: "Hard: Find Missing Number",
            link: "https://codeforces.com/problemset/problem/347/A",
          },
          {
            title: "Hard: Maximum Length Subarray",
            link: "https://codeforces.com/problemset/problem/1054/C",
          },
          {
            title: "Hard: Find Duplicates",
            link: "https://codeforces.com/problemset/problem/149/A",
          },
          {
            title: "Hard: Partition Array",
            link: "https://codeforces.com/problemset/problem/880/C",
          },
          {
            title: "Medium: Move Zeroes",
            link: "https://codeforces.com/problemset/problem/156/A",
          },
          {
            title: "Medium: Search in Rotated Array",
            link: "https://codeforces.com/problemset/problem/478/A",
          },
          {
            title: "Easy: Find Pair",
            link: "https://codeforces.com/problemset/problem/157/A",
          },
          {
            title: "Medium: Longest Increasing Subsequence",
            link: "https://codeforces.com/problemset/problem/108/A",
          },
          {
            title: "Hard: Merge Sort Inversion Count",
            link: "https://codeforces.com/problemset/problem/699/D",
          },
          {
            title: "Hard: Max Consecutive Ones",
            link: "https://codeforces.com/problemset/problem/1419/B",
          },
          {
            title: "Medium: Product of Array Except Itself",
            link: "https://codeforces.com/problemset/problem/1221/D",
          },
          {
            title: "Easy: Two Sum",
            link: "https://codeforces.com/problemset/problem/999/B",
          },
          {
            title: "Hard: Maximum Subarray Sum with at Most One Deletion",
            link: "https://codeforces.com/problemset/problem/1329/D",
          },
          {
            title: "Medium: Median of Array",
            link: "https://codeforces.com/problemset/problem/1451/C",
          },
        ],
      },
      {
        name: "Prefix Sum",
        problems: [
          {
            title: "Easy: Running Sum of 1d Array",
            link: "https://leetcode.com/problems/running-sum-of-1d-array/",
          },
          {
            title: "Easy: Subarray Sum Equals K",
            link: "https://leetcode.com/problems/subarray-sum-equals-k/",
          },
          {
            title: "Easy: Find Pivot Index",
            link: "https://leetcode.com/problems/find-pivot-index/",
          },
          {
            title: "Medium: Range Sum Query - Immutable",
            link: "https://leetcode.com/problems/range-sum-query-immutable/",
          },
          {
            title: "Medium: 2D Matrix Subregion Sum",
            link: "https://leetcode.com/problems/range-sum-query-2d-immutable/",
          },
          {
            title: "Medium: Subarray Product Less Than K",
            link: "https://leetcode.com/problems/subarray-product-less-than-k/",
          },
          {
            title: "Hard: Maximum Size Subarray Sum Equals k",
            link: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
          },
          {
            title: "Hard: Count of Range Sum",
            link: "https://leetcode.com/problems/count-of-range-sum/",
          },
          {
            title:
              "Hard: Subarray Sum Equals K (Sliding Window and Prefix Sum)",
            link: "https://leetcode.com/problems/subarray-sum-equals-k/",
          },
          {
            title: "Hard: Minimum Window Substring",
            link: "https://leetcode.com/problems/minimum-window-substring/",
          },
          {
            title: "Easy: Best Time to Buy and Sell Stock",
            link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            title: "Easy: Merge Sorted Array",
            link: "https://leetcode.com/problems/merge-sorted-array/",
          },
          {
            title: "Medium: Sliding Window Maximum",
            link: "https://leetcode.com/problems/sliding-window-maximum/",
          },
          {
            title: "Medium: Subarray Sum Equals K (Dynamic Programming)",
            link: "https://leetcode.com/problems/subarray-sum-equals-k/",
          },
          {
            title: "Medium: Move Zeroes",
            link: "https://leetcode.com/problems/move-zeroes/",
          },
          {
            title: "Hard: Longest Substring Without Repeating Characters",
            link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          },
          {
            title: "Hard: Substring with Concatenation of All Words",
            link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
          },
          {
            title: "Hard: Palindrome Partitioning II",
            link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
          },
          {
            title: "Hard: Minimum Size Subarray Sum",
            link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
          },
          {
            title: "Hard: Valid Palindrome II",
            link: "https://leetcode.com/problems/valid-palindrome-ii/",
          },
        ],
      },
      {
        name: "Hashing",
        problems: [
          {
            title: "Easy: Two Sum",
            link: "https://leetcode.com/problems/two-sum/",
          },
          {
            title: "Easy: Contains Duplicate",
            link: "https://leetcode.com/problems/contains-duplicate/",
          },
          {
            title: "Easy: Intersection of Two Arrays",
            link: "https://leetcode.com/problems/intersection-of-two-arrays/",
          },
          {
            title: "Medium: Group Anagrams",
            link: "https://leetcode.com/problems/group-anagrams/",
          },
          {
            title: "Medium: Happy Number",
            link: "https://leetcode.com/problems/happy-number/",
          },
          {
            title: "Medium: Longest Consecutive Sequence",
            link: "https://leetcode.com/problems/longest-consecutive-sequence/",
          },
          {
            title: "Hard: Subarray Sum Equals K (Using HashMap)",
            link: "https://leetcode.com/problems/subarray-sum-equals-k/",
          },
          {
            title: "Hard: Max Points on a Line",
            link: "https://leetcode.com/problems/max-points-on-a-line/",
          },
          {
            title: "Hard: Find the Duplicate Number",
            link: "https://leetcode.com/problems/find-the-duplicate-number/",
          },
          {
            title: "Hard: Random Pick with Weight",
            link: "https://leetcode.com/problems/random-pick-with-weight/",
          },
        ],
      },
    ],
  },
];

const Level1 = () => {
  return (
    <div className="bg-white max-w-7xl m-auto text-red-600 py-12 px-6 md:px-12">
      {levels.map((level) => (
        <div key={level.name} className="mb-20">
          <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6">
            {level.name}
          </h2>
          <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
            {level.description}
          </p>

          {level.topics.map((topic) => (
            <div key={topic.name} className="mb-12">
              <h3 className="text-3xl font-semibold text-red-600 mb-6">
                {topic.name}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {topic.problems.map((problem, index) => (
                  <Link to={problem.link}>
                    <li
                      key={index}
                      className="bg-white border-2 border-transparent p-6 rounded-3xl shadow-lg hover:bg-white hover:border-red-600 hover:text-red-600 hover:shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105"
                    >
                      <span
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-lg"
                      >
                        {problem.title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Level1;
