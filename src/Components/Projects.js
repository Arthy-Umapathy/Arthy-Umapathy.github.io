import React from "react";
import "../App.css";
import {ProjectData} from "../Data";

/*
  Small description of some of my projects.
  Used Card Flip display to view the projects.
*/
export default function Projects() {
  return (
    <section id="projects" className="card container-fluid p-3 my-3 ">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 style={{ fontFamily: "Brush Script MT" }}>Application Built</h1>
        <div
          className="container card-deck text-center lg:px-40"
          style={{ display: "flex", flexDirection: "row" }}
        >
          {ProjectData.map((item) => (
            <div className="flip-card p-3">
              <div className="flip-card-inner">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="flip-card-front"
                >
                  <h1 style={{ fontFamily: "Brush Script MT" }}>
                    {item.title}
                  </h1>
                </div>
                <div className="flip-card-back">
                  <h3 className="sub">{item.subtitle}</h3>
                  <p>{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
