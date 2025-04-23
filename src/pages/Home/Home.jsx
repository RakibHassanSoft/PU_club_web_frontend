import React from "react";
import Hero from "../../compoents/Home/Hero";
import TopPerformer from "../../compoents/Home/TopPerformer";
import Notices from "../../compoents/Home/Notices";
import UpcomingContests from "../../compoents/Home/UpcomingContests";

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <UpcomingContests />
      <TopPerformer />
      <Notices />
      
    </div>
  );
};

export default Home;
