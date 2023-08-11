import React from "react";
import Scrollspy from "react-ui-scrollspy";
import Start from "./components/start";
import ProfileComp from "./components/ProfileComp";
import Footer from "./components/footer";
import Stats from "./components/stats";
import qrCode from "../Assets/Images/QRCODE.webp";
import AutoTyper from "./components/autoTyper";
import { Link } from "react-router-dom";
import py from "../Assets/Images/python.svg";
import css from "../Assets/Images/css.svg";
import js from "../Assets/Images/js.svg";
import html from "../Assets/Images/html.svg";
import react from "../Assets/Images/react.svg";
import oracle from "../Assets/Images/oracle.svg";
import java from "../Assets/Images/java.svg";
import mongo from "../Assets/Images/mongo.svg";
import mysql from "../Assets/Images/mysql.svg";
import django from "../Assets/Images/django.svg";
import Head from "./components/Head";

export default function Profile() {
  return (
    <div className="d-flex flex-lg-row main">
      <Head
        title="Profile"
        description="This is a portfolio website of Full stack MERN Web developer Idris Vohra."
        keywords="Profile, Overview, Idris Vohra, Idris, iv-portfolio, HTML5, CSS, React, React Native, JavaScript, Web developer, Application developer"
      />
      <div className="nav-scrollspy">
        <ProfileComp />
        <a href="#start" data-to-scrollspy-id="start">
          Start
        </a>
        <a href="#overview" data-to-scrollspy-id="overview">
          Overview
        </a>
        <a href="#about" data-to-scrollspy-id="about">
          About
        </a>
        <a href="#what-i-do" data-to-scrollspy-id="what-i-do">
          What I do?
        </a>
        <a href="#stats" data-to-scrollspy-id="stats">
          How good am I?
        </a>
        <a href="#hire-me" data-to-scrollspy-id="hire-me">
          Hire me
        </a>
        <a href="#buy-me-a-chai" data-to-scrollspy-id="buy-me-a-chai">
          Buy me a chai!
        </a>
        <a href="#end" data-to-scrollspy-id="end">
          End.
        </a>
      </div>
      <main className="content-main">
        <Scrollspy>
          <section id="start">
            <Start />
            <div>I am Idris Vohra!</div>
            <AutoTyper />
            <div>Welcome to my portfolio website! 💖 </div>
            <div>Created all manually by me with React.</div>
          </section>
          <section id="overview">
            <h1>A Brief Overview about me:</h1>
            <div>
              I am a full stack developer, I have worked with various
              technologies & I aspire to learn various mobile app frameworks for
              application development.
            </div>
            <div>
              I am a aspiring content creator and social media influencer on
              various niche that may include personality development,
              philosophy, psychology and spirituality. I write blogs and books
              but haven't published any yet.
            </div>
            <div>
              I have done multiple kinds of <a href="/projects">projects</a> on
              the frameworks I learned.
            </div>
            <div>
              From which the favourite of mine are{" "}
              <a
                target="_blank"
                href="https://www.djangoproject.com/"
                rel="noreferrer"
              >
                django
              </a>{" "}
              and{" "}
              <a target="_blank" href="https://reactjs.org/" rel="noreferrer">
                Reactjs
              </a>
              .
            </div>
            <div>
              I am currently persuing JavaScript and everything related to it. I
              am an professional programmer in JavaScript but I wish to master
              it.
            </div>
            <div>
              I have also made projects to clear the fundamentals of programming
              languages that I came across and explained in detail with comment
              approach all of the fundamentals of various languages and
              frameworks for that check out my{" "}
              <a
                target="_blank"
                href="https://github.com/Idrisvohra9"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              profile and leave a follow, if any of my repositories are helpful
              ⭐ them would be appreciated.
            </div>
            <div>
              I have many plans for life and would love to get hired by a
              reputed organization to shine my true potential.
            </div>
          </section>
          <section id="about">
            <h1>Some other info about me:</h1>
            <div>
              <div>
                <p className="highlight">Natitionality: </p>Indian
              </div>
              <div>
                <p className="highlight">Religion: </p>Muslim
              </div>
              <div>
                <p className="highlight">State: </p>Gujarat
              </div>
              <div>
                <p className="highlight">City: </p>Ahmedabad
              </div>
              <div>
                <p className="highlight">University: </p>Gujarat Univ.
              </div>
              <div>
                <p className="highlight">Age: </p>19
              </div>
              <div>
                <p className="highlight">Gender: </p>Male/He
              </div>
              <div>
                <p className="highlight">Favourite coding languages: </p>Python,
                JavaScript
              </div>
              <div>
                <p className="highlight">Past work experience: </p>None
              </div>
              <div>
                <p className="highlight">Education status: </p>Currently
                persuing Bsc.IT Bachelors
              </div>
              <div>
                <p className="highlight">Certifications: </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1RLVrTfsO0PVTFJUYbMbvFBahlJKCvueH/view?usp=share_link"
                >
                  AICES
                </a>
                ,{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1L7mxCNJymaKZZSgDo2huTkL1D9JB8IL2/view?usp=share_link"
                >
                  PMGDSA
                </a>
              </div>
            </div>
            <h1>Languages I speak:</h1>
            <div className="mt-4">Hindi, English, Gujarati</div>
          </section>
          <section id="what-i-do">
            <h1>What I do:</h1>
            <div>
              I am a student, working on developing my skills and self
              improvement.
            </div>
            <div>
              I write sometimes check out my blogs{" "}
              <a
                target="_blank"
                href="https://ivblogz.wordpress.com/"
                rel="noreferrer"
              >
                IV Blogz
              </a>
              .{" "}
            </div>
            <div>
              I also love to help people find their true self spiritually and
              mentally check out my content at YouTube{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UC7WlFhckErZwpHZ5EB7mImw"
              >
                Idris Vohra
              </a>
              . I also have a coding channel check out{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCllRlG3XjZZrMpCzB5slu2A"
              >
                themellowcoder
              </a>
              .
            </div>
            <div>
              I have many plans for life and would love to get hired by a
              reputed organization to shine my true potential.
            </div>
          </section>
          <section id="stats">
            <h1>How good am I at various skills?</h1>
            <div>
              <b>Note:</b> I am rating myself based on the exams and exercises I
              have been through and know that I am going to improve than this.
            </div>
            <div className="container">
              <h2 className="mt-4">Languages</h2>
              <Stats label="Python" percent={88} icon={py} />
              <Stats label="HTML" percent={98} color="darkorange" icon={html} />
              <Stats label="CSS" percent={95} color="blue" icon={css} />
              <Stats label="SCSS" percent={80} color="blue" icon={css} />
              <Stats label="JS" percent={85} color="green" icon={js} />
              <Stats label="Java" percent={90} color="dark" icon={java} />

              <h2 className="mt-4">Frameworks</h2>
              <Stats label="Django" percent={86} icon={django} />
              <Stats label="React" percent={80} color="green" icon={react} />
              <Stats
                label="React Native"
                percent={53}
                color="darkcyan"
                icon={react}
              />

              <h2 className="mt-4">Databases</h2>
              <Stats label="MySQL" percent={95} icon={mysql} />
              <Stats
                label="Oracle"
                percent={90}
                color="crimson"
                icon={oracle}
              />
              <Stats
                label="MongoDB"
                percent={93}
                color="magenta"
                icon={mongo}
              />
            </div>
          </section>
          <section id="hire-me">
            <h1>Hire me!</h1>
            <div>
              You can reach me through any of the contact information provided{" "}
              <Link to="/contact">here</Link>.
            </div>
            <div>I am open to work for u :)</div>
          </section>
          <section id="buy-me-a-chai">
            <h1>Buy me a chai🍵!</h1>
            <div>
              Gift me some money as a way of showing appreciation of my work or
              just gift me because u like me idk😅.
              <div className="mt-4">
                <p className="highlight">My UPI ID: </p>
                idrishaider987@okhdfcbank
              </div>
              <div>
                Or just <b>Scan</b> :
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={qrCode}
                  alt="QR code"
                  className="img-fluid rounded-2 qr-code"
                />
              </div>
            </div>
          </section>
          <section id="end">
            <Footer />
          </section>
        </Scrollspy>
      </main>
    </div>
  );
}
