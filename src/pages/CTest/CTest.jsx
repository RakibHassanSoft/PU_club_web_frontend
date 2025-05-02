import React, { useState, useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Swal from "sweetalert2";

// Utility to get random items
const getRandomProblems = (problems, count = 5) => {
  const shuffled = [...problems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Format milliseconds into hh:mm:ss
const formatTime = (milliseconds) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const CTest = () => {
  const [tag, setTag] = useState("");
  const [problems, setProblems] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("02:00:00");
  const [allTags, setAllTags] = useState([]);

  const DURATION = 2 * 60 * 60 * 1000;

  useEffect(() => {
    fetch("codeforwin_c_problems.json")
      .then((res) => res.json())
      .then((data) => {
        const tagsSet = new Set();
        data.forEach((p) => {
          p.tags.forEach((t) => tagsSet.add(t));
        });
        setAllTags([...tagsSet].sort());
      })
      .catch((err) => console.error("Error loading problems:", err));
  }, []);

  const fetchProblems = async () => {
    try {
      const res = await fetch("codeforwin_c_problems.json");
      const data = await res.json();
      let filtered = data;

      if (tag) {
        filtered = data.filter((p) => p.tags.includes(tag));
      }

      setProblems(getRandomProblems(filtered));
      setStartTime(Date.now());
    } catch (err) {
      console.error("Error fetching problems:", err);
    }
  };

  const handleStart = () => {
    fetchProblems();
  };

  useEffect(() => {
    let timerInterval;
    if (startTime) {
      timerInterval = setInterval(() => {
        const now = Date.now();
        const remaining = DURATION - (now - startTime);
        setTimeRemaining(formatTime(remaining));
        if (remaining <= 0) clearInterval(timerInterval);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [startTime]);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-10">
            Basic Programming Self Test
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full md:w-auto px-5 py-3 rounded-lg border border-red-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            >
              <option value="">Select Tag (Optional)</option>
              {allTags.length === 0 ? (
                <option disabled>No tags found</option>
              ) : (
                allTags.map((t, idx) => (
                  <option key={idx} value={t}>
                    {t}
                  </option>
                ))
              )}
            </select>

            <button
              onClick={handleStart}
              className="px-6 py-3 text-white bg-orange-600 hover:bg-white hover:text-orange-500 border border-orange-600 font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Start Test
            </button>
          </div>

          {startTime && (
            <div className="text-center mb-6 text-xl font-semibold text-red-500">
              Time Remaining: {timeRemaining}
            </div>
          )}

          {problems.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-400 mb-4">
                Your Problems
              </h2>
              <div className="flex flex-col gap-6">
                {problems.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-2 rounded-xl shadow-md border border-red-100 hover:shadow-lg transition"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-red-600">
                        <span className="text-black font-bold pr-2">
                          {i + 1}.
                        </span>
                        {p.problem_name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-8 flex items-center justify-center border-2 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto shadow-xl rounded-full px-4 py-3 sm:px-6 sm:py-4 border-red-300 mt-10 bg-red-600 text-white">
            <FaExclamationTriangle className="mr-2 text-white text-xl sm:text-2xl" />
            Warning!! Do not go to any other page of this website during the
            test. It will reset your test.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CTest;
