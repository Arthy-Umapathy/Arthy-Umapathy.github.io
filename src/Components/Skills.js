import React, { Fragment } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";
import {SkillsData} from "../Data";
import Fade from "react-reveal/Fade";

/*
  Comprises of some of my technical skills.
  Used accordion categorizing and displaying various skills.
*/
export default function Skills() {
  return (
    <section id="skills" className="container">
      <Fragment>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 style={{ fontFamily: "Brush Script MT" }}>Skills</h1>
        </div>
        {SkillsData.map((item) => (
          <div>
            <br />
            <div className="container">
              <Fade left>
                <Accordion>
                  <Card>
                    <Card.Header
                      style={{
                        background:
                          "linear-gradient(to left, #333399 0%, #0099cc 100%)",
                      }}
                    >
                      <Accordion.Toggle eventKey="0">
                        {item.category}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>{item.skills}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Fade>
            </div>
          </div>
        ))}
      </Fragment>
    </section>
  );
}
