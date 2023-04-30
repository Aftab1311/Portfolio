import React from "react";
import "./Projects.css";
import project1 from "../img/project/project1real.jpg";
import project2 from "../img/project/project2real.jpg";
import project3 from "../img/project/project3real.jpg";

const Projects = () => {
 
  return (
    <>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main_project">PROJECTS</span>
            <span class="about__title-line_project"></span>
            <span className="heading-sec__sub_project">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </span>
          </h2>
          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project1}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Aviate DashBoard</h3>
                <p className="projects__row-content-desc">
                The Aviate Dashboard is a project that I created using ReactJS. Users can view the status of their applications, receive notifications when their applications are viewed or updated, and even schedule interviews directly from the dashboard.
                </p>
                <a
                  className="btn btn--med btn--theme dynamicBgClr"
                  href="https://github.com/Aftab1311/Aviate-Dashboard"
                >
                  Case Study
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project3}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">
                  Note Making Web
                </h3>
                <p className="projects__row-content-desc">
                  I make a Note making App or web that is useful for taking and managing notes. It was a great
                  experience for me to build the entire frontend.
                </p>
                <a
                  className="btn btn--med btn--theme dynamicBgClr"
                  href="https://github.com/Aftab1311/Note-Making-App"
                >
                  Case Study
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project2}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Tasty Treat</h3>
                <p className="projects__row-content-desc">
                  Tasty Treat is a web template that I created targeting the pizza
                  restaurant and food industry which anyone can use to present
                  their business online.
                </p>
                <a
                  className="btn btn--med btn--theme dynamicBgClr"
                  href="https://github.com/Aftab1311/Tasty_Treat"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
