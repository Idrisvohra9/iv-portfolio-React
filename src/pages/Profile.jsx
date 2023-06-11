import React from "react";
import Scrollspy from "react-ui-scrollspy";
import Start from "./components/start";
import ProfileComp from "./components/ProfileComp";
import Footer from "./components/footer";
import Stats from "./components/stats";
import qrCode from "./Images/QRCODE.webp";
import AutoTyper from "./components/autoTyper";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Profile() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className="d-flex flex-lg-row main" onLoad={scrollToTop}>
      <Helmet>
        <title>Idris Vohra - Profile</title>
        <meta
          name="description"
          content="Webpage displaying the profile and realted information of Idris Vohra."
        />
        <meta
          name="keywords"
          content="Profile, Overview, Idris Vohra, Idris, iv-portfolio, HTML5, CSS, React, React Native, JavaScript, Web developer, Application developer"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Idris Vohra" />
        <meta name="twitter:title" content="Idris Vohra - Portfolio" />
        <meta
          name="twitter:description"
          content="This is a portfolio website of Full stack MERN Web developer Idris Vohra."
        />
        <meta
          name="twitter:image"
          content="https://photos.app.goo.gl/ev1uhkPK6feYxmgb8"
        />
      </Helmet>
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
          What I do
        </a>
        <a href="#stats" data-to-scrollspy-id="stats">
          How good I am
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
              <Stats label="Python" percent={88} />
              <Stats label="Django" percent={86} />
              <Stats label="HTML" percent={98} color="darkorange" />
              <Stats label="CSS" percent={95} color="blue" />
              <Stats label="SCSS" percent={80} color="blue" />
              <Stats label="JS" percent={85} color="green" />
              <Stats label="React" percent={80} color="green" />
              <Stats label="React Native" percent={93} color="darkcyan" />

              <Stats label="Java" percent={90} color="dark" />
              <Stats label="MySQL" percent={95} />
              <Stats label="Oracle" percent={90} color="crimson" />
              <Stats label="MongoDB" percent={93} color="magenta" />
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
