// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./Home.styles.scss";

// Import: Assets
import { ReactComponent as RobotHome } from "../../../assets/images/pageImages/robot-home.svg";
import { ReactComponent as RobotGuide } from "../../../assets/images/pageImages/robot-guide.svg";
import { ReactComponent as RobotCommunity } from "../../../assets/images/pageImages/robot-community.svg";
import { ReactComponent as Wave } from "../../../assets/images/pageImages/wave.svg";

// Page: Home
function Home({ open }) {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={
        open
          ? { filter: "blur(6px)", transition: "filter 0.3s ease-in-out" }
          : null
      }
    >
      <div className="Home">
        <h1 className="Home__title">All things keyboard</h1>
        <div className="Home__information-container">
          <p className="Home__text">
            Whether you're a hobbyist or a fanatic, rizji will look out for all
            your keyboard needs.
          </p>
          <div className="Home__cta-container">
            <Link to="/shop">
              <div className="Home__cta">
                <span>Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="Home__image">
          <RobotHome />
        </div>
      </div>
      <div className="TopWave">
        <Wave />
      </div>
      <div className="Home__background">
        <div className="Home__guide">
          <div className="Home__guide-container">
            <h2>Not sure where to start?</h2>
            <p>
              The keyboard hobby can be pretty daunting for newbies. There are
              lots of things to learn, and even more personal preferences to
              discover. Luckily, we're here to help!
            </p>
            <p>Check out our beginners guide for all things keyboard below.</p>
            <div className="Home__guide-cta-container">
              <Link to="/keyboard-guide">
                <div className="Home__guide-cta">
                  <span>Keyboard Guide</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="Home__guide-image">
            <RobotGuide />
          </div>
        </div>
      </div>
      <div className="BottomWave">
        <Wave />
      </div>
      <div className="Home__community">
        <div className="Home__community-container">
          <h2>Join the community</h2>
          <p>
            If you're in love with keyboards, you're not alone! We have a super
            helpful (and super dedicated) community waiting for you.
          </p>
          <Link to="/sign-in">
            <div className="Home__community-cta-container">
              <div className="Home__community-cta">
                <span>Sign Up</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="Home__community-image">
          <RobotCommunity />
        </div>
      </div>
    </div>
  );
}

// Export: Home
export default Home;
