import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 style={{ fontFamily: "Brush Script MT" }}>Past Works</h1>
      </div>
      <Fragment>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="Jan 2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Cognizant</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nova Scotia,Canada
            </h4>
            <p>
              Worked and trained in Guidewire software, a cloud-based insurance
              software enabling businesses streamline processes. Expanded and
              enhanced insurance client application and improved overall
              performance and market value. Provided feedback for various
              modules after complete analysis of the existing components within
              the project.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Dec 2021"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Canada Revenue Agency
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ontario,Canada
            </h4>
            <p>
              Worked as a full stack developer for an application named SERS, a
              system that calculates amounts based on the tax information
              provided by an organization. Designed and developed different
              client-side modules and key features using Java along with swing
              framework. Worked on writing test cases for entire application
              using Junit framework and raised code coverage from 0% to 85%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="Aug 2019 - Nov 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Accenture</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tamil Nadu,India
            </h4>
            <p>
              Trained in concept-based programs (file handling, database
              connectivity) using core Java on Eclipse oxygen. Designed mini
              online transaction processing service using procedural languages
              by preserving data concurrency and consistency in a multi-user
              environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - May 2019"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Infosys</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Karnataka,India
            </h4>
            <p>
              Created and developed dynamic web forms and pages using NodeJS and
              React framework on an Online Quiz portal. Worked on creating a
              rich user interface using HTML 5, CSS, JavaScript, Bootstrap,
              MDBReact Frameworks. Implemented server & client-side validation
              using validation controls and preserved security using JSON Web
              Token.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2017 - May 2017"
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">HCL</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tamil Nadu, India
            </h4>
            <p>
              Trained in Java basics, javascript, and OOPS. Worked on mini
              development projects to prove my proficiency on the languages.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Fragment>
    </section>
  );
}
