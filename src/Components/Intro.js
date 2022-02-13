import React, { Fragment } from "react";
import Bounce from "react-reveal/Flip";
import { Card, CardDeck } from "react-bootstrap";
import Slide from "react-reveal/Slide"

export default function Intro() {
  return (
    <section id="intro">
      <Fragment style={{ marginBottom: 0, backgroundColor: "whitesmoke" }}>
        <div>
          <main className=" card container-fluid p-5 my-3 ">
            <Bounce><h1 style={{textAlign:"center",fontFamily: "Brush Script MT" }}>Arthy Umapathy</h1></Bounce>
            <div className="container">
              <CardDeck>
                <Card className="card p-3">
                  <Card.Body>
                    <Slide left>
                    <Card.Title>
                      I am Software Professional and I love to create and build
                      applications
                    </Card.Title>

                    <Card.Text>
                      Ever since my school days, I had a passion for software
                      development. Overcoming my parent's will to become a
                      medical student, I became a Computer Engineer. During my
                      undergraduate studies, I grabbed my chance to gain
                      industrial experience in Accenture. Infosys and HCL where
                      I learned Java, C, C++, Python, and databases like Oracle,
                      SQL. This passion led me to pursue my Master's at
                      Dalhousie University. Here I was exposed to many new
                      technologies that I didn't have a chance to work on
                      earlier like ReactJS, AWS, Flask, etc. I became more
                      fascinated by the new technologies that I was learning
                      during the course term. There are still many new languages
                      and frameworks to learn about and I believe that my
                      passion for learning new stuff would definitely help me to
                      grow my learning curve much better. My strength is that I
                      am a self-learner and my curiosity keeps me going on. So I
                      am looking for a challenging career that would help me
                      portray my technical and analytical skills and enhance my
                      knowledge and skills.
                    </Card.Text>
                    </Slide>
                  </Card.Body>
                </Card>
                <Card className="card p-3">
                  <Slide right>
                  <Card.Img varient="bottom" src="./Arthy.jpg" />
                  </Slide>
                </Card>
              </CardDeck>
            </div>
          </main>
        </div>
      </Fragment>
    </section>
  );
}
