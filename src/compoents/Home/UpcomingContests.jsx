import React, { useEffect, useState } from 'react';

const UpcomingContests = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Fetch upcoming contests from Codeforces API
    const fetchContests = async () => {
      try {
        // Fetch Codeforces upcoming contests
        const codeforcesRes = await fetch('https://codeforces.com/api/contest.list?gym=false');
        const codeforcesData = await codeforcesRes.json();

        console.log('Codeforces API Response:', codeforcesData); // Log Codeforces data

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
            platform: 'Codeforces',
            date: new Date(contest.startTimeSeconds * 1000).toLocaleDateString(),
            time: new Date(contest.startTimeSeconds * 1000).toLocaleTimeString(),
          }));

        console.log('Upcoming Codeforces Contests:', upcomingContests); // Log upcoming contests

        setContests(upcomingContests);
      } catch (error) {
        console.error('Error fetching contests:', error);
      }
    };

    fetchContests();
  }, []);

  return (
    <section className="py-14 px-4">
       <h1 className='text-center font-bold text-red-600 text-4xl'>Up comming contest </h1>
      <div className="max-w-5xl mx-auto flex flex-wrap  justify-center items-center gap-6 mt-10">
        {contests.map((contest, i) => (
          <div
            key={i}
            className="bg-white border w-64  border-red-200 rounded-lg shadow-md p-5 text-center hover:bg-red-100 transition"
          >
            <h3 className="text-xl font-semibold">{contest.platform}</h3>
            <p className="text-gray-700 mt-2">{contest.date}</p>
            <p className="text-red-600 font-mono">{contest.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingContests;
