import React from "react";
import Hero from "../../compoents/Home/Hero";
import TopPerformer from "../../compoents/Home/TopPerformer";
import Notices from "../../compoents/Home/Notices";
import UpcomingContests from "../../compoents/Home/UpcomingContests";
import Demo from "../../compoents/Shared/Demo";
import useAuth from "../../hook/useAuth";

const Home = () => {
  const isAuthenticated = useAuth();
  
  if (!isAuthenticated) {
    // If not authenticated, the user will be redirected, and the content won't load
    return null; // Or display a loading indicator
  }
  return (
    <div className="space-y-12">
      <Hero />
      <UpcomingContests />
      <TopPerformer />
      <Notices />
      <Demo/>
      
    </div>
  );
};

export default Home;
