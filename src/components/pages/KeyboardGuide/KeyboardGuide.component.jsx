// Import: Dependencies
import React, { useEffect } from "react";

// Import: Styling
import "./KeyboardGuide.styles.scss";

// Page: KeyboardGuide
function KeyboardGuide({ open }) {
  // Upon navigation to KeyboardGuide, moves DOM to top of window
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
            <ul className="KeyboardGuide__section-nav">
              <li>
                <a href="#keyboard-types">
                  <span>#</span>Keyboard Types
                </a>
              </li>
              <li>
                <a href="#pcbs">
                  <span>#</span>PCBs
                </a>
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
      <div className="KeyboardGuide__keyboard-types" id="keyboard-types">
        <div className="KeyboardGuide__keyboard-types-container">
          <h2 className="KeyboardGuide__keyboard-types-title">
            <a href="#keyboard-types" style={{ color: "white" }}>
              <span>#</span> Keyboard Types
            </a>
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
      <div className="KeyboardGuide__pcbs" id="pcbs">
        <div className="KeyboardGuide__pcbs-container">
          <h2 className="KeyboardGuide__pcb-title">
            <a href="#pcbs">
              <span>#</span> PCBs
            </a>
          </h2>
          <div className="KeyboardGuide__pcb-text-container">
            <p className="KeyboardGuide__pcb-text">
              The PCB (Printed Circuit Board) in simple terms is used to connect
              and support electrical components through conductive pathways
              engraved into layers of copper on or between layers of
              non-conductive substrates. The components are usually soldered
              onto the PCB to bind them into the circuit (this also helps to
              keep them secure!).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export: KeyboardGuide
export default KeyboardGuide;
