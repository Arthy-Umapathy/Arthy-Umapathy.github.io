import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Slide from "react-reveal/Slide"

export default function Contact() {
  return (
    <section id="contact" className="container">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 style={{ fontFamily: "Brush Script MT" }}>Contact me</h1>
      </div>
      <CardDeck>
        <Card className="card p-3" style={{backgroundColor:"#76d5f5"}}>
          <Card.Body>
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute insert-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.55172727629!2d-63.59963048456003!3d44.64707819561233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2180d1da35dd%3A0x9798acb92ede5452!2sQuinpool%20Court!5e0!3m2!1sen!2sca!4v1644784969235!5m2!1sen!2sca"
            />
          </Card.Body>
        </Card>
        <Slide right>
        <Card className="card p-3" style={{backgroundColor:"#76d5f5"}}>
          <Card.Body>
            <div style={{ textAlign: "center" }}>
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-black tracking-widset text-xs">
                  Address
                </h2>
                <p className="mt-1">
                  204-2225 Monastery Ln.
                  <br />
                  Halifax, NS B3L 4R1
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-black tracking-widset text-xs">
                  Email
                </h2>
                <a href="#contact">arthyumapathy@gmail.com</a>
                <h2 className="title-font font-semibold text-black tracking-widset text-xs mt-4">
                  Phone
                </h2>
                <p className="leading-relaxed">+1 (902)-412-5146</p>
              </div>
            </div>
          </Card.Body>
        </Card>
        </Slide>
      </CardDeck>
    </section>
  );
}
