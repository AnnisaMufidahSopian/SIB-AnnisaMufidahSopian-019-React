
import React from 'react';
import NavigationBar2 from './components/NavigationBar2';
import MeetUp from './components/MeetUp'
import NextMeetUp from './components/NextMeetUp'
import AboutMeetUp from './components/AboutMeetUp'
import Members from './components/Members'
import PastMeetUp from './components/PastMeetUp'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <NavigationBar2 /> 
      <MeetUp />
      <NextMeetUp />
      <AboutMeetUp />
      <Members />
      <PastMeetUp />
      <Footer />
   </>
    
  );
}

export default App;
