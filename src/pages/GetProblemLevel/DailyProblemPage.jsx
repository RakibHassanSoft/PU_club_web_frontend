import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFilter, FaSearch } from "react-icons/fa";

const getProblemLevel = (rating) => {
  if (rating >= 1800) return "Expert";
  if (rating >= 1400) return "Advanced";
  if (rating >= 1000) return "Intermediate";
  return "Beginner";
};

const ProblemCard = ({ problem }) => {
  const contestId = problem.contestId;
  const problemIndex = problem.index;
  const contestName = problem.contestName || "Unknown Contest";
  const problemName = problem.name || "No Problem Name";
  const rating = problem.rating || "N/A";

  return (
    <Link
      to={`https://codeforces.com/problemset/problem/${contestId}/${problemIndex}`}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition-transform hover:scale-105 duration-300"
    >
      <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4 w-96 md:w-[30rem] lg:w-[30rem] h-72 border-2 border-gray-300 relative">
        {/* Rating Highlight */}
        {rating !== "N/A" && (
          <div className="absolute right-2 bottom-0 bg-red-500 text-white px-4 py-4  text-md rounded-full font-bold shadow-lg">
            {rating}
          </div>
        )}
        {rating !== "N/A" && (
          <div className="absolute right-2 top-2 px-4 py-4  text-md  font-bold ">
            <img
              className=" h-14"
              src="https://res.cloudinary.com/dvdyfyryz/image/upload/v1745399405/apps.48094.14504742535903781.aedbca21-113a-48f4-b001-4204e73b22fc_kzl0um.png"
              alt=""
            />
          </div>
        )}

        <h3 className="text-2xl font-extrabold w-11/12 text-orange-600">
          {problemName}
        </h3>
        <div className="text-md text-gray-600 space-y-1">
          <p>
            <strong className="font-semibold">Problem Index:</strong>{" "}
            <span className="text-red-500 font-bold text-xl">
              {problemIndex}
            </span>
          </p>
          <p>
            <strong className="font-semibold">Contest Id:</strong>
            <span className="text-red-500 font-bold text-xl"> {contestId}</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {problem.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white text-black text-md font-medium px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="bg-white animate-pulse p-4 sm:p-6 rounded-3xl w-full w-96 md:w-[30rem] lg:w-[30rem] h-72 border-2 border-red-300">
      <div className="h-6 bg-orange-600 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-red-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-red-300 rounded w-1/3 mb-2"></div>
      <div className="flex flex-wrap gap-2 mt-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="h-8 w-20 bg-white border-2 border-gray-400 shadow-2xl rounded-full"
          ></div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <div className=" bg-red-600 h-16 w-16 rounded-full"></div>
      </div>
    </div>
  );
};

const DailyProblemPage = () => {
  const [level, setLevel] = useState("Beginner");
  const [problems, setProblems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const problemsPerPage = 5;
  const [pageInput, setPageInput] = useState(""); // State for the page input field

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://codeforces.com/api/problemset.problems"
      );
      const allProblems = res.data.result.problems;

      // Extract unique tags
      const tagSet = new Set();
      allProblems.forEach((problem) =>
        problem.tags.forEach((tag) => tagSet.add(tag))
      );
      setTags([...tagSet]);

      // Filter based on level
      const filteredByLevel = allProblems.filter((problem) => {
        const rating = problem.rating;
        if (level === "Beginner" && rating >= 800 && rating <= 1000)
          return true;
        if (level === "Intermediate" && rating > 1000 && rating <= 1400)
          return true;
        if (level === "Advanced" && rating > 1400 && rating <= 1800)
          return true;
        if (level === "Expert" && rating > 1800) return true;
        return false;
      });

      // Filter by search query or tag
      const filtered = filteredByLevel.filter((problem) => {
        const matchSearch =
          problem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          problem.contestId.toString().includes(searchQuery.toLowerCase()) ||
          problem.index.toLowerCase().includes(searchQuery.toLowerCase());

        const matchTag = selectedTag
          ? problem.tags.includes(selectedTag)
          : true;

        return matchSearch && matchTag;
      });

      // Sort by rating then name
      const sortedResults = [...filtered].sort((a, b) => {
        if (a.rating === b.rating) return a.name.localeCompare(b.name);
        return a.rating - b.rating;
      });

      setProblems(sortedResults);
    } catch (err) {
      console.error("Error fetching problems:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, [level, searchQuery, selectedTag]);

  // Reset to the first page if the query or tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTag]);

  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );

  const totalPages = Math.ceil(problems.length / problemsPerPage);

  const handlePageChange = (e) => {
    const page = Number(e.target.value);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setPageInput(page);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg w-10/12">
      <h2 className="text-5xl font-bold text-center mt-10 mb-10 text-red-600">
        Daily Problem
      </h2>
      <div className="flex items-center gap-3 mb-6 bg-white border-2 border-red-500 rounded-full px-4 py-3 shadow-sm hover:border-red-600 transition duration-300 w-fit">
        <FaFilter className="text-red-500 text-xl" />
        <select
          onChange={(e) => setLevel(e.target.value)}
          value={level}
          className="bg-transparent outline-none  text-gray-800 text-lg cursor-pointer"
        >
          <option  value="Beginner">Beginner (800–1000)</option>
          <option value="Intermediate">Intermediate (1000–1400)</option>
          <option value="Advanced">Advanced (1400–1800)</option>
          <option value="Expert">Expert (1800+)</option>
        </select>
      </div>

      <div className="relative w-full max-w-md mx-auto mb-6">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500 text-lg" />
        <input
          type="text"
          placeholder="Search by name, ID, or contest..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-red-500 focus:ring-2 focus:ring-red-400 focus:outline-none shadow-md transition duration-300 text-gray-800 placeholder-gray-400"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
            className={`px-3 py-2  text-md rounded-full border border-white shadow-xl transition-all font-semibold duration-300 ${
              selectedTag === tag
                ? "bg-red-500 text-white"
                : "bg-white text-black "
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {loading ? (
          Array.from({ length: 5 }).map((_, idx) => (
            <>
              <SkeletonLoader key={idx} />
            </>
          ))
        ) : currentProblems.length === 0 ? (
          <div className="col-span-full text-center text-lg font-semibold text-gray-500">
            Problems Data Found
          </div>
        ) : (
          currentProblems.map((problem) => (
            <ProblemCard
              key={problem.contestId + problem.index}
              problem={problem}
            />
          ))
        )}
      </div>

      <div className="flex flex-wrap justify-center items-center mt-6 gap-2 px-2">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="bg-red-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Previous
        </button>

        {/* Pagination Numbers */}
        <div className="flex flex-wrap justify-center gap-2">
          {currentPage > 1 && (
            <>
              <button
                onClick={() => setCurrentPage(1)}
                className="px-3 py-1 rounded-md text-white bg-red-500"
              >
                1
              </button>
              {currentPage > 2 && <span className="text-gray-600">...</span>}
            </>
          )}

          {[...Array(totalPages).keys()]
            .slice(Math.max(currentPage - 3, 0), currentPage + 2)
            .map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-3 py-1 rounded-md text-sm ${
                  page + 1 === currentPage
                    ? "bg-red-600 text-white"
                    : "bg-white text-red-500 border border-red-500"
                }`}
              >
                {page + 1}
              </button>
            ))}

          {currentPage < totalPages - 1 && (
            <span className="text-gray-600">...</span>
          )}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 rounded-md text-white bg-red-500"
            >
              {totalPages}
            </button>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="bg-red-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Page Input */}
      <div className="mt-4 text-left flex items-center space-x-3">
        <input
          type="number"
          id="pageNumber"
          onChange={handlePageChange}
          min="1"
          max={totalPages}
          className="p-3 border-2 border-red-500 rounded-lg w-28 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-600 transition duration-300 ease-in-out"
          placeholder="Page #"
        />
        <span className="text-lg text-gray-500">of {totalPages}</span>
      </div>
    </div>
  );
};

export default DailyProblemPage;
