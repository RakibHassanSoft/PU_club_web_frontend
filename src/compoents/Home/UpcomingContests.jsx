import React, { useEffect, useState } from "react";

const UpcomingContests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Fetch upcoming contests from Codeforces API
    const fetchContests = async () => {
      try {
        // Fetch Codeforces upcoming contests
        const codeforcesRes = await fetch(
          "https://codeforces.com/api/contest.list?gym=false"
        );
        const codeforcesData = await codeforcesRes.json();

        // Get the current date and the date 7 days from now
        const currentDate = new Date();
        const nextWeekDate = new Date();
        nextWeekDate.setDate(currentDate.getDate() + 7);

        // Filter contests within the next 7 days
        const upcomingContests = codeforcesData.result
          .filter((contest) => {
            const contestDate = new Date(contest.startTimeSeconds * 1000);
            return contestDate >= currentDate && contestDate <= nextWeekDate;
          })
          .map((contest) => ({
            platform: "Codeforces",
            date: new Date(
              contest.startTimeSeconds * 1000
            ).toLocaleDateString(),
            time: new Date(
              contest.startTimeSeconds * 1000
            ).toLocaleTimeString(),
            startTime: contest.startTimeSeconds * 1000, // Save the timestamp for sorting
          }))
          .sort((a, b) => a.startTime - b.startTime); // Sort contests by start time (ascending)

        setContests(upcomingContests);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };

    fetchContests();
  }, []);

  return (
    <section className="py-14 px-4">
      <h1 className="text-center font-bold text-red-600 text-4xl mb-8">
        Upcoming Contests
      </h1>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 mt-10">
        {contests.map((contest, i) => (
          <div
            key={i}
            className="bg-white border w-72 border-red-200 rounded-lg shadow-md p-6 text-center transition-all transform hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-red-600">
              {contest.platform}
            </h3>
            <p className="text-gray-700 mt-2 text-lg font-medium">
              {contest.date}
            </p>
            <p className="text-red-600 font-mono mt-1">{contest.time}</p>
            <div className="mt-4">
                <a
                  href="https://codeforces.com/contests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                  View Details
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingContests;
