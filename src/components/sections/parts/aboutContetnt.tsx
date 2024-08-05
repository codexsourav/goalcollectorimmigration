"use client";
import React, { useRef, useState, useEffect } from "react";

function AboutContent() {
  // Create a ref with HTMLDivElement type
  const outerDivRef = useRef<HTMLDivElement>(null);
  // State to store the height of the div
  const [divHeight, setDivHeight] = useState<number>(0);

  useEffect(() => {
    // Function to update the height in state
    const updateHeight = () => {
      if (outerDivRef.current) {
        setDivHeight(outerDivRef.current.offsetHeight);
      }
    };

    // Update height when component mounts
    updateHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div ref={outerDivRef}>
      <div className="relative">
        <div
          className="absolute w-full bg-blue-50 -z-10 mt-4 ml-5"
          style={{ height: divHeight + 6 + "px" }}
        ></div>
        <div className="md:p-10 p-5 mt-10 bg-white border">
          <p>
            Goal Collector Immigration is the brand name for the International
            Talent Division of{" "}
            <b>M/s Goal Collector Immigration Consultancy Pvt.</b>
            Ltd. - an ISO 9001:2015 Quality Certified Company. Goal Collector
            Immigration is a registered legal entity with the Ministry of
            Corporate Affairs, Government of India, with Company Identification
            Number <b>(CIN : U74140RJ2022PTC082667)</b> and having its office at
            131, Second Floor, Siddhi Vinayak Tower Saraswati Nagar Near Mr
            Travels Basni Mandi Mode, Jodhpur Rajsasthan 342001, India. Goal
            Collector Immigration is the exclusive holder of the recruitment{" "}
            <b>License No: B-2170/RAJ/COM/100/5/10490/2023</b> and the general
            public is hereby informed that the said recruitment license number
            can only be used by Goal Collector Immigration with no authorisation
            to anyone else.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
