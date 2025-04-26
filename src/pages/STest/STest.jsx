import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";
import Swal from "sweetalert2";

const divisions = {
  div1: { minRating: 2100, maxRating: 3500 },
  div2: { minRating: 1600, maxRating: 2099 },
  div3: { minRating: 1200, maxRating: 1599 },
  div4: { minRating: 0, maxRating: 1199 },
};

const getRandomProblems = (problems, count = 5) => {
  const shuffled = [...problems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

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

const STest = () => {
  const [level, setLevel] = useState("");
  const [handle, setHandle] = useState("");
  const [problems, setProblems] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [score, setScore] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("02:00:00");
  const [loading, setLoading] = useState(false);

  const DURATION = 2 * 60 * 60 * 1000; // 2 hours

  const fetchProblems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://codeforces.com/api/problemset.problems"
      );
      const allProblems = res.data.result.problems;
      const { minRating, maxRating } = divisions[level];
      const filtered = allProblems.filter(
        (p) => p.rating >= minRating && p.rating <= maxRating
      );
      const selected = getRandomProblems(filtered);
      setProblems(selected);
      setStartTime(Date.now());
      setScore(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStart = async () => {
    if (!level || !handle) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select a division and enter your Codeforces handle.",
      });
      return;
    }

    try {
      const res = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
      );
      if (res.data.status === "OK") {
        fetchProblems();
      } else {
        Swal.fire({
          icon: "warning",
          title: "Invalid Codeforces handle",
          text: "Please enter a valid one.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error checking Codeforces handle. Please try again.",
      });
    }
  };

  const checkSubmission = async () => {
    try {
      setSubmitting(true);
      const res = await axios.get(
        `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10`
      );
      const lastSubs = res.data.result
        .filter((s) => s.verdict === "OK")
        .slice(0, 5)
        .map((s) => `${s.problem.contestId}-${s.problem.index}`);

      const given = problems.map((p) => `${p.contestId}-${p.index}`);
      let matched = 0;
      given.forEach((g) => {
        if (lastSubs.includes(g)) matched++;
      });
      setScore(matched * 20);
      setSubmitting(false);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    let timerInterval;
    if (startTime) {
      timerInterval = setInterval(() => {
        const now = Date.now();
        const remaining = DURATION - (now - startTime);
        setTimeRemaining(formatTime(remaining));
        if (remaining <= 0) {
          clearInterval(timerInterval);
          checkSubmission();
        }
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [startTime, problems]);

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-10">
            Codeforces Self Test
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full md:w-auto px-5 py-3 rounded-lg border border-red-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            >
              <option value="">Select Division</option>
              <option value="div1">Div 1</option>
              <option value="div2">Div 2</option>
              <option value="div3">Div 3</option>
              <option value="div4">Div 4</option>
            </select>

            <input
              type="text"
              placeholder="Enter Codeforces Handle"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full md:w-auto px-5 py-3 rounded-lg border border-red-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-700"
            />

            <button
              onClick={handleStart}
              className="px-6 py-3 text-white bg-orange-600 hover:bg-white hover:text-orange-500 font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Start Test
            </button>
          </div>

          {startTime && (
            <div className="text-center mb-6 text-xl font-semibold text-red-500">
              Time Remaining: {timeRemaining}
            </div>
          )}

          {loading && (
            <div className="flex justify-center items-center mt-10">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
            </div>
          )}

          {problems.length > 0 && !loading && (
            <div className="mt-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
                Your Problems
              </h2>
              <div className="flex flex-col gap-6">
                {problems.map((p, i) => (
                  <a
                    key={i}
                    href={`https://codeforces.com/contest/${p.contestId}/problem/${p.index}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block p-5 rounded-xl shadow-md border border-red-100 hover:shadow-lg hover:border-red-300 transition duration-300 bg-white"
                  >
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold text-red-600 mb-1">
                        <span className="text-black px-2">{i + 1 + " "}</span>
                        {p.name}
                      </h3>
                      <p className="text-lg ml-2 text-gray-600 font-bold">
                        Rating: {p.rating}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {score !== null && (
            <div className="mt-10 text-center text-2xl font-bold text-red-600">
              Your Score: {score}/100
            </div>
          )}

          {submitting && (
            <div className="text-center mt-6 text-sm text-gray-500 animate-pulse">
              Checking submissions...
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

export default STest;
