import React from "react";
import MeetupCard from "../atom/MeetupCard";
import MembersCard from "../atom/MembersCard";
import AboutMeetUp from "../atom/AboutMeetUp";
import NextMeetUpCard from "../atom/NextMeetupCard";
import PastMeetUp from "../atom/PastMeetUp";


const Home = () => {
  return (
    <>
      <MeetupCard />
      <NextMeetUpCard />
      <AboutMeetUp />
      <MembersCard />
      <PastMeetUp /> 
    </>
  );
};

export default Home;
