import React, { useState, useEffect } from "react";
import './Home.scss';
import Landing from '../images/LandingRight.png';
import EventCarousel from "./EventCarousel";
import FollowCarousel from "./FollowCarousel";
import Carousel from "./Carousel";
import Opportunity from "./Opportunity";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
  const [user, setUser] = useState(null);
  const [dynamicTexts, setDynamicTexts] = useState(['Explore Singing Competition', 'Discover Art Exhibitions', 'Join Coding Challenges']);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => {
      unsubscribe();
      clearInterval(textInterval);
    };
  }, [dynamicTexts]);

  return (
    <div className="Main">
      <div className="MainCont">
        <div className="Landing-Cont">
          <div className="LeftCont">
            <h3>Welcome</h3>
            <h1 className="LandingHeading">{user ? user.displayName || 'User' : 'User'}!</h1>
            <hr />
            <p>A day without hustle is a day wasted</p>
          </div>
          <div className="MiddleCont">
            <h2>Explore</h2>
            <h3>{dynamicTexts[currentTextIndex]}</h3>
          </div>
          <div className="RightCont">
            <img className="LandingImg" src={Landing} alt="Landing Image" />
          </div>
        </div>
      </div>
      <div className="Carousel">
        <Carousel />
      </div>

      <div className="Opportunities">
        <div className="OppHeading">
          <h2>| Popular Shows </h2>
          {/* <h4>| Showcase your skills by participating in various opportunities of your interest.</h4> */}
        </div>
        <EventCarousel />
      </div>

      <div className="Opportunities">
        <div className="OppHeading">
          <h2>| Competition for You </h2>
          {/* <h4>| Showcase your skills by participating in various opportunities of your interest.</h4> */}
        </div>
        <EventCarousel />
      </div>

      <div className="OpportunityCont">
        <Opportunity />
      </div>

      <div className="Opportunities">
        <div className="OppHeading">
          <h2>| Gigs for You </h2>
          {/* <h4>| Showcase your skills by participating in various opportunities of your interest.</h4> */}
        </div>
        <EventCarousel />
      </div>
  
      <div className="Opportunities1">
        <div className="OppHeading1">
          <h2>| Popular Event Organizers </h2>
          {/* <h4>| Showcase your skills by participating in various opportunities of your interest.</h4> */}
        </div>
        <FollowCarousel />
      </div>
      <div className="spacer">©️RowX 2024</div>
    </div>
  );
}

export default Home;
