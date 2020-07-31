// Import: Dependencies
import React, { useEffect, useRef } from "react";

// Import: Styling
import "./KeyboardGuide.styles.scss";

// Page: KeyboardGuide
function KeyboardGuide() {
  // Upon navigation to KeyboardGuide, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="KeyboardGuide">
        <div className="KeyboardGuide__container">
          <h1 className="KeyboardGuide__title">Keyboard Guide</h1>
          <div className="KeyboardGuide__information-container">
            <p className="KeyboardGuide__text">
              Welcome to rizji's Keyboard Guide! We know that the world of
              keyboards can be a bit overwhelming, so we've put this guide
              together to help you get started as quickly (and comfortably) as
              possible. Whether you like your keyboards big or small, clicking
              or clacking, lighting up like a disco inferno or calm and
              reserved, we'll do our best to keep you informed.
            </p>
            <p className="KeyboardGuide__text">
              Please note that this guide will be fairly lengthy as there's a
              lot to cover, so please feel free to use our section links below
              if you need to jump to anywhere in particular.
            </p>
            <ul>
              <li>
                <span>#</span>Keyboard Types
              </li>
              <li>
                <span>#</span>Keyboard PCBs
              </li>
              <li>
                <span>#</span>Plates
              </li>
              <li>
                <span>#</span>Cases
              </li>
              <li>
                <span>#</span>Switches
              </li>
              <li>
                <span>#</span>Keycaps
              </li>
              <li>
                <span>#</span>Lube
              </li>
              <li>
                <span>#</span>How to build
              </li>
            </ul>
            <p className="KeyboardGuide__text">Let's get started.</p>
          </div>
        </div>
      </div>
      <div className="KeyboardGuide__keyboard-types">
        <div className="KeyboardGuide__keyboard-types-container">
          <h2 className="KeyboardGuide__keyboard-types-title">
            <span>#</span> Keyboard Types
          </h2>
          <div className="KeyboardGuide__keyboard-types-information-container">
            <p className="KeyboardGuide__keyboard-types-text">
              There are lots and lots of different keyboard sizes, but they are
              all more or less variations of the common sizes:
            </p>
            <ul>
              <li>
                <i className="fas fa-angle-right" />
                Full-size
              </li>
              <li>
                <i className="fas fa-angle-right" />
                Tenkeyless (or TKL)
              </li>
              <li>
                <i className="fas fa-angle-right" />
                Compact
              </li>
            </ul>
            <p className="KeyboardGuide__keyboard-types-text">
              To make things even more fun, compact keyboards vary into the
              following:
            </p>
            <ul>
              <li>
                <i className="fas fa-angle-right" />
                75%
              </li>
              <li>
                <i className="fas fa-angle-right" />
                65%
              </li>
              <li>
                <i className="fas fa-angle-right" />
                60%
              </li>
              <li>
                <i className="fas fa-angle-right" />
                40%
              </li>
              <li>
                <i className="fas fa-angle-right" />
                Ortholinear
              </li>
              <li>
                <i className="fas fa-angle-right" />
                Split
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: KeyboardGuide
export default KeyboardGuide;
