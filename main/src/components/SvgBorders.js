import React from "react";
import "../index.css";
import { motion } from "framer-motion";

const SvgBorders = () => {
  return (
    <div>
      <div>
        <svg
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          data-name="corner-top-left"
        >
          <defs>
            <linearGradient id="gradi" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0" className="gradient1">
                <animate
                  dur="2s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="0"
                />
              </stop>
              <stop offset=".5" className="gradient2">
                <animate
                  dur="2s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to=".5"
                />
              </stop>
              <stop offset="1" className="gradient1">
                <animate
                  dur="2s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                />
              </stop>
            </linearGradient>
          </defs>
          <path
            fill="url('#gradi')"
            d="M 8 0 h 292 l -20 10 H 25 A 5 5 90 0 0 10 22 v 255 L 0 300 V 8 a 8 8 90 0 1 8 -8 z"
          ></path>
          <circle id="myCircle" cx="16.5" cy="15" r="5" fill="url('#gradi')" />
          <path
            fill="url('#gradi')"
            d="M 34 25 h 214 l -20 10 H 44 Q 36 35 36 44 v 195 L 26 250 V 33 a 8 8 90 0 1 8 -8 z"
            className="path"
          ></path>
        </svg>
      </div>

      <div>
        <svg
          width="300"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          data-name="corner-bottom-right"
        >
          <defs>
            <linearGradient id="gradi" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0" className="gradient1"></stop>
              <stop offset=".5" className="gradient2"></stop>
              <stop offset="1" className="gradient1"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url('#gradi')"
            d="M 292 300 h -292 l 20 -10 H 275 A 5 5 270 0 0 290 278 v -255 L 300 0 V 292 a 8 8 270 0 1 -8 8 z"
          ></path>
          <circle id="myCircle" cx="282" cy="282" r="5" fill="url('#gradi')" />
          <path
            fill="url('#gradi')"
            d="M 266 275 h -214 l 20 -10 H 256 Q 264 265 264 256 v -195 L 274 50 V 267 a 8 8 270 0 1 -8 8 z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SvgBorders;
