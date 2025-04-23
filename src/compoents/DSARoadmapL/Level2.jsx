import React from 'react';
import { Link } from 'react-router-dom';

const levels = [
  {
    name: 'Level 2: Intermediate',
    description: 'Dive into more challenging problems involving algorithms and data structures. Master sorting algorithms, binary search, recursion, backtracking, and more.',
    topics: [
      {
        name: 'Sorting Algorithms',
        problems: [
          { title: 'Bubble Sort', link: 'https://codeforces.com/problemset/problem/1/A' },
          { title: 'Insertion Sort', link: 'https://codeforces.com/problemset/problem/2/A' },
          { title: 'Merge Sort', link: 'https://codeforces.com/problemset/problem/3/A' },
          { title: 'Quick Sort', link: 'https://codeforces.com/problemset/problem/4/A' },
          { title: 'Counting Sort', link: 'https://codeforces.com/problemset/problem/5/A' },
          { title: 'Radix Sort', link: 'https://codeforces.com/problemset/problem/6/A' },
          { title: 'Heap Sort', link: 'https://codeforces.com/problemset/problem/7/A' },
          { title: 'Selection Sort', link: 'https://codeforces.com/problemset/problem/8/A' },
          { title: 'Merge k Sorted Lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
          { title: 'Quickselect', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
          { title: 'Dutch National Flag Problem', link: 'https://codeforces.com/problemset/problem/9/A' },
          { title: 'Binary Search Tree Sort', link: 'https://codeforces.com/problemset/problem/10/B' },
          { title: 'Bucket Sort', link: 'https://codeforces.com/problemset/problem/11/A' },
          { title: 'Topological Sort', link: 'https://leetcode.com/problems/course-schedule/' },
          { title: 'Sort Colors', link: 'https://leetcode.com/problems/sort-colors/' },
          { title: 'Quick Sort for Strings', link: 'https://codeforces.com/problemset/problem/12/A' },
          { title: 'Sorting Strings by Frequency', link: 'https://codeforces.com/problemset/problem/13/B' },
          { title: 'Ternary Search', link: 'https://codeforces.com/problemset/problem/14/C' },
          { title: 'Heap Sort in Python', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
          { title: 'Sorting by Blocks', link: 'https://codeforces.com/problemset/problem/15/A' },
        ]
      },
      {
        name: 'Binary Search',
        problems: [
          { title: 'Binary Search Basics', link: 'https://codeforces.com/problemset/problem/1/B' },
          { title: 'Find Target', link: 'https://codeforces.com/problemset/problem/2/B' },
          { title: 'Search in Rotated Sorted Array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
          { title: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
          { title: 'Kth Smallest Element', link: 'https://codeforces.com/problemset/problem/230/C' },
          { title: 'Largest Gap', link: 'https://codeforces.com/problemset/problem/1035/D' },
          { title: 'Binary Search with Backtracking', link: 'https://codeforces.com/problemset/problem/147/C' },
          { title: 'Kth Largest Sum of Subarrays', link: 'https://codeforces.com/problemset/problem/1439/D' },
          { title: 'Min Difference of Subset Sum', link: 'https://codeforces.com/problemset/problem/694/C' },
          { title: 'Search in Infinite Array', link: 'https://leetcode.com/problems/search-in-infinite-array/' },
          { title: 'Number of Elements Less Than or Equal to K', link: 'https://codeforces.com/problemset/problem/17/B' },
          { title: 'Binary Search on Answer', link: 'https://codeforces.com/problemset/problem/153/A' },
          { title: 'Finding Position in a Sorted Array', link: 'https://leetcode.com/problems/search-insert-position/' },
          { title: 'First and Last Position of Element', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
          { title: 'Maximum Size Subarray Sum Less Than K', link: 'https://leetcode.com/problems/maximum-size-subarray-sum-less-than-k/' },
          { title: 'Optimal Division', link: 'https://leetcode.com/problems/optimal-division/' },
          { title: 'Square Root of N', link: 'https://leetcode.com/problems/sqrtx/' },
          { title: 'Max Distance Between Same Elements', link: 'https://leetcode.com/problems/max-distance-between-same-elements/' },
          { title: 'Search in 2D Matrix', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
          { title: 'Minimized Maximum of Products', link: 'https://leetcode.com/problems/minimized-maximum-of-products/' },
        ]
      },
      {
        name: 'Stack & Queue',
        problems: [
          { title: 'Balanced Brackets', link: 'https://codeforces.com/problemset/problem/1/A' },
          { title: 'Queue Operations', link: 'https://codeforces.com/problemset/problem/2/B' },
          { title: 'Stack Sequence', link: 'https://codeforces.com/problemset/problem/3/B' },
          { title: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
          { title: 'Implement Queue using Stacks', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
          { title: 'Next Greater Element', link: 'https://leetcode.com/problems/next-greater-element-i/' },
          { title: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
          { title: 'Largest Rectangle in Histogram', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
          { title: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
          { title: 'Maximal Rectangle', link: 'https://leetcode.com/problems/maximal-rectangle/' },
          { title: 'Two Sum II', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
          { title: 'Reverse Polish Notation', link: 'https://leetcode.com/problems/valid-parentheses/' },
          { title: 'Valid Parentheses', link: 'https://leetcode.com/problems/valid-parentheses/' },
          { title: 'Queue Reconstruction by Height', link: 'https://leetcode.com/problems/queue-reconstruction-by-height/' },
          { title: 'Trapping Rain Water', link: 'https://leetcode.com/problems/trapping-rain-water/' },
          { title: 'Asteroid Collision', link: 'https://leetcode.com/problems/asteroid-collision/' },
          { title: 'Remove Invalid Parentheses', link: 'https://leetcode.com/problems/remove-invalid-parentheses/' },
          { title: 'Simplify Path', link: 'https://leetcode.com/problems/simplify-path/' },
          { title: 'Sum of Subarray Minimums', link: 'https://leetcode.com/problems/sum-of-subarray-minimums/' },
          { title: 'Number of Islands', link: 'https://leetcode.com/problems/number-of-islands/' },
        ]
      },
      {
        name: 'Recursion & Backtracking',
        problems: [
          { title: 'Fibonacci Number', link: 'https://leetcode.com/problems/fibonacci-number/' },
          { title: 'Factorial', link: 'https://codeforces.com/problemset/problem/4/A' },
          { title: 'N-Queens', link: 'https://leetcode.com/problems/n-queens/' },
          { title: 'Permutations', link: 'https://leetcode.com/problems/permutations/' },
          { title: 'Combination Sum', link: 'https://leetcode.com/problems/combination-sum/' },
          { title: 'Subsets', link: 'https://leetcode.com/problems/subsets/' },
          { title: 'Letter Combinations of a Phone Number', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
          { title: 'Sudoku Solver', link: 'https://leetcode.com/problems/sudoku-solver/' },
          { title: 'Word Search II', link: 'https://leetcode.com/problems/word-search-ii/' },
          { title: 'Palindrome Partitioning', link: 'https://leetcode.com/problems/palindrome-partitioning/' },
          { title: 'Subsets II', link: 'https://leetcode.com/problems/subsets-ii/' },
          { title: 'Permutations II', link: 'https://leetcode.com/problems/permutations-ii/' },
          { title: 'Target Sum', link: 'https://leetcode.com/problems/target-sum/' },
          { title: 'Combination Sum IV', link: 'https://leetcode.com/problems/combination-sum-iv/' },
          { title: 'Unique Paths', link: 'https://leetcode.com/problems/unique-paths/' },
          { title: 'Restore IP Addresses', link: 'https://leetcode.com/problems/restore-ip-addresses/' },
          { title: 'Path Sum II', link: 'https://leetcode.com/problems/path-sum-ii/' },
          { title: 'Letter Combinations', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
          { title: 'Permutations with Duplication', link: 'https://leetcode.com/problems/permutations-ii/' },
          { title: 'M Coloring Problem', link: 'https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1' },
        ]
      },
      {
        name: 'Bit Manipulation',
        problems: [
          { title: 'Odd or Even', link: 'https://codeforces.com/problemset/problem/156/A' },
          { title: 'Count Set Bits', link: 'https://codeforces.com/problemset/problem/211/A' },
          { title: 'Bitwise AND', link: 'https://codeforces.com/problemset/problem/112/A' },
          { title: 'Xor Sequence', link: 'https://codeforces.com/problemset/problem/273/B' },
          { title: 'Bitwise OR', link: 'https://codeforces.com/problemset/problem/255/A' },
          { title: 'Find the XOR', link: 'https://codeforces.com/problemset/problem/987/A' },
          { title: 'Maximum XOR Subarray', link: 'https://codeforces.com/problemset/problem/155/B' },
          { title: 'Subset Sum', link: 'https://codeforces.com/problemset/problem/503/D' },
          { title: 'XOR and Maximum Subarray', link: 'https://codeforces.com/problemset/problem/354/C' },
          { title: 'Bitwise Operations', link: 'https://codeforces.com/problemset/problem/125/C' },
          { title: 'Maximum Xor of Two Numbers in an Array', link: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/' },
          { title: 'Number of 1 Bits', link: 'https://leetcode.com/problems/number-of-1-bits/' },
          { title: 'Single Number', link: 'https://leetcode.com/problems/single-number/' },
          { title: 'Reverse Bits', link: 'https://leetcode.com/problems/reverse-bits/' },
          { title: 'Power of Two', link: 'https://leetcode.com/problems/power-of-two/' },
          { title: 'Total Hamming Distance', link: 'https://leetcode.com/problems/total-hamming-distance/' },
          { title: 'Missing Number', link: 'https://leetcode.com/problems/missing-number/' },
          { title: 'Find Complement of a Number', link: 'https://leetcode.com/problems/number-complement/' },
          { title: 'Number of Ways to Flip a Binary String', link: 'https://leetcode.com/problems/number-of-ways-to-flip-a-binary-string/' },
          { title: 'N-th Tribonacci Number', link: 'https://leetcode.com/problems/n-th-tribonacci-number/' },
        ]
      },
    ]
  }
];

const Level2 = () => {
  return (
    <div className="bg-white max-w-7xl m-auto text-red-600 py-12 px-6 md:px-12">
  {levels.map((level) => (
    <div key={level.name} className="mb-16">
      <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6">{level.name}</h2>
      <p className="text-xl text-center mb-8 max-w-3xl mx-auto">{level.description}</p>
      
      {level.topics.map((topic) => (
        <div key={topic.name} className="mb-10">
          <h3 className="text-3xl font-semibold text-red-600 mb-6">{topic.name}</h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Level2;
