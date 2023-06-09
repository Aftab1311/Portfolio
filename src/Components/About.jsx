import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main_about">ABOUT ME</span>
            <span class="about__title-line_about"></span>
            <span className="heading-sec__sub_about">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  I'm a <strong>Frontend Web Developer</strong> building the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in
                  the <strong>Projects</strong> section.
                </p>
                <p className="about__content-details-para">
                  I like sharing content related to the stuff that I have
                  learned over the years in <strong>Web Development</strong> so
                  it can help other people of the Dev Community. Feel free to
                  Connect or Follow me on my &nbsp; 
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/aftabahmed1311/"
                    target="_blank"
                  >
                    Linkedin 
                  </a>
                  &nbsp; where I post useful content related to Web Development and
                  Programming
                </p>
                <p className="about__content-details-para">
                  I'm open to <strong>Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                </p>
              </div>
              <div className="ctbtn"> 
              <button href="./#contact">
                Contact Me
              </button>
              </div>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-skillsTitle">My Skills</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">NodeJs</div>
                <div className="skills__skill">Express Basics</div>
                <div className="skills__skill">MongoDB Basics</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Responsive Design</div>
                <div className="skills__skill">Terminal</div>
                <div className="skills__skill">SQL Basics</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
