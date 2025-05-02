import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Add custom styles if needed
import { FaCalendar, FaCode } from "react-icons/fa";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const MyLearning = () => {
  const [cfData, setCfData] = useState(null);
  const [solvedStats, setSolvedStats] = useState({});
  const [solvedDates, setSolvedDates] = useState(new Set());
  const [recentProblems, setRecentProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosPublic(); // Custom hook for axios instance  
  const email = sessionStorage.getItem("userEmail");
 
  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const userRes = await axiosInstance.get(
          `/auth/user/${email}`
        );
        const handle = userRes.data.codeforcesHandle;

        const cfInfo = await axios.get(
          `https://codeforces.com/api/user.info?handles=${handle}`
        );
        setCfData(cfInfo.data.result[0]);

        const cfStatus = await axios.get(
          `https://codeforces.com/api/user.status?handle=${handle}`
        );
        const submissions = cfStatus.data.result;

        const solved = submissions.filter((sub) => sub.verdict === "OK");

        // 🔹 Set solved dates
        const datesSet = new Set();
        const statsByDate = {};
        const uniqueProblems = [];

        for (const sub of solved) {
          const date = new Date(
            sub.creationTimeSeconds * 1000
          ).toLocaleDateString();
          statsByDate[date] = (statsByDate[date] || 0) + 1;
          datesSet.add(new Date(sub.creationTimeSeconds * 1000).toDateString());

          const problemKey = `${sub.problem.contestId}-${sub.problem.index}`;
          if (!uniqueProblems.some((p) => p.key === problemKey)) {
            uniqueProblems.push({
              key: problemKey,
              name: sub.problem.name,
              link: `https://codeforces.com/contest/${sub.problem.contestId}/problem/${sub.problem.index}`,
            });
          }
        }

        setSolvedStats(statsByDate);
        setSolvedDates(datesSet);
        setRecentProblems(uniqueProblems.slice(0, 5));
      } catch (err) {
        Swal.fire(
          "Error",
          err.response?.data?.error || "Something went wrong!",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchCodeforcesData();
    } else {
      Swal.fire(
        "Unauthorized",
        "No user email found. Please log in.",
        "warning"
      );
      setLoading(false);
    }
  }, [email]);

  const tileClassName = ({ date, view }) => {
    if (view === "month" && solvedDates.has(date.toDateString())) {
      return "marked-day";
    }
    return null;
  };

  if (loading)
    return (
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 border border-red-800">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full max-w-sm p-6">
            <Skeleton circle height={100} width={100} />
            <Skeleton height={30} className="mt-4" />
            <Skeleton height={20} className="mt-2" />
            <Skeleton height={20} className="mt-2" />
            <Skeleton height={20} className="mt-2" />
            <Skeleton height={20} className="mt-2" />
            <Skeleton height={20} className="mt-2" />
            <Skeleton height={30} className="mt-5" />
          </div>

          <div className="flex-1 p-6">
            <Skeleton height={40} width={200} className="mb-6" />
            <Skeleton height={200} className="mb-6" />
            <Skeleton height={30} width={150} className="mb-6" />
            <Skeleton height={20} count={5} className="mb-2" />
          </div>
        </div>
      </div>
    );

  if (!cfData)
    return (
      <div className="text-center py-10 text-red-800 font-semibold">
        No Codeforces data found.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto bg-white p-2 lg:p-6 rounded-lg shadow-lg mt-10 border border-red-800 mb-12 pb-3">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Profile Info */}
        <div className="bg-white border border-red-800 rounded-xl shadow-md p-6 w-full max-w-sm text-center">
          <img
            src={cfData.titlePhoto}
            alt="Profile"
            className="w-28 h-28 mx-auto rounded-full border-4 border-red-800 shadow-md"
          />
          <h2 className="text-2xl font-extrabold text-red-800 mt-4">
            {cfData.handle}
          </h2>

          <div className="mt-4 space-y-1 text-gray-700 text-sm">
            <p>
              <span className="font-semibold text-red-800">Rank:</span>{" "}
              {cfData.rank}
            </p>
            <p>
              <span className="font-semibold text-red-800">Rating:</span>{" "}
              {cfData.rating}
            </p>
            <p>
              <span className="font-semibold text-red-800">Max Rating:</span>{" "}
              {cfData.maxRating}
            </p>
            <p>
              <span className="font-semibold text-red-800">Contribution:</span>{" "}
              {cfData.contribution}
            </p>
            <p>
              <span className="font-semibold text-red-800">Last Online:</span>{" "}
              {new Date(cfData.lastOnlineTimeSeconds * 1000).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-red-800">Registered:</span>{" "}
              {new Date(
                cfData.registrationTimeSeconds * 1000
              ).toLocaleDateString()}
            </p>
          </div>

          <a
            href={`https://codeforces.com/profile/${cfData.handle}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 px-4 py-2 bg-red-800 text-white font-semibold rounded-full hover:bg-red-700 transition"
          >
            View Full Profile
          </a>
        </div>

        {/* Calendar + Solved Summary */}
        <div className="flex-1 bg-white border border-red-800 rounded-xl shadow-md  lg:p-6 mt-6 lg:mt-0">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            📅 Problem Solving Calendar
          </h3>

          <div className="rounded-xl overflow-hidden mb-6 shadow-sm flex justify-center items-center ">
            <Calendar
              tileClassName={tileClassName}
              className="w-full border-red-800 p-4 text-sm rounded"
            />
          </div>

          {/* Daily Solve History */}
          <div className="mb- p-3">
            <h3 className="text-xl font-semibold text-red-800 flex justify-center items-center gap-2 mb-3">
              <FaCalendar /> Daily Solve History
            </h3>
            <p className="mb-3 text-gray-700">
              Total Solved:{" "}
              <span className="font-extrabold text-red-800">
                {Object.values(solvedStats).reduce((a, b) => a + b, 0)}
              </span>
            </p>
            <div className="max-h-48 overflow-y-auto bg-red-50 border border-red-300 rounded-md p-3 shadow-inner space-y-1">
              {Object.entries(solvedStats)
                .sort(([a], [b]) => new Date(b) - new Date(a))
                .map(([date, count]) => (
                  <div
                    key={date}
                    className="flex justify-between text-sm border-b border-red-100 py-1"
                  >
                    <span className="text-gray-700">{date}</span>
                    <span className="font-medium text-red-700">
                      {count} problem(s)
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Last 5 Solved Problems */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-red-800 flex justify-center items-center gap-2">
              <FaCode /> Last 5 Solved Problems
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
              {recentProblems.map((p, index) => (
                <li key={index}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-700 font-medium hover:underline"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
