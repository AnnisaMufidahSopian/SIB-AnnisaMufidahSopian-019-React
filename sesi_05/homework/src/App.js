import React from 'react';
import NavBar from './components/atom/NavBar'
import MeetupCard from './components/atom/MeetupCard';
import MembersCard from './components/atom/MembersCard';
import AboutMeetUp from './components/atom/AboutMeetUp'
import NextMeetUpCard from './components/atom/NextMeetupCard';
import PastMeetUp from './components/atom/PastMeetUp';
import Footer from './components/atom/Footer'
import NavBarTest from './NavBarTest'


function App() {
  return (
    <>
      <NavBar />
      <NavBarTest />
      <MeetupCard /> 
      <NextMeetUpCard />
      <AboutMeetUp />
      <MembersCard />
      <PastMeetUp />
      <Footer />
   </>
    
  );
}

export default App;
