import React from "react";
import "../styles/styles.css";

function WorkExperienceScreen() {
  return (
    <main>
      <section className="intro_section">
        <p>Hello! Welcome to my portfolio website!</p>
        <p>
          I'm a Software Engineering student at the University of Calgary and
          the founder of <strong>Romdova LTD</strong>. I'm passionate about
          creating innovative software solutions that solve real-world problems
          and leave a meaningful impact.
        </p>
        <img
          className="HomeScreen_main_image"
          src={require("../images/headshot.JPG")}
          alt="Headshot"
        />
      </section>

      <section className="work_experiences_section">
        <p className="main_title">WORK EXPERIENCES</p>

        <article className="experience">
          {/* FIRST EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/Romdova Logo.png")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">1. Romdova LTD.</p>
              <p>Founder</p>
              <p>July 2024 - Present </p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              NEED TO UPDATE I lead the development of innovative software
              solutions for various applications. My mission is to deliver
              high-quality software that solves real-world problems and enhances
              everyday experiences.
            </p>

            <p className="experience_section_text">TECHNICAL WORK DESCRIPTION</p>
            <ul className="technical_description">
              <li>
                Established a legal Canadian startup independently, managing all
                application and registration processes.
              </li>
              <li>
                Developed innovative software solutions to solve real-world
                problems and assist others in bringing their ideas to
                completion.
              </li>
              <li>
                Published mobile apps on Apple and Google Play Stores, web
                applications, and launched a company website.
              </li>
              <li>
                Applied Agile project management methodologies for efficient
                software development.
              </li>
              <li>
                Led the company’s vision and strategy to create scalable and
                impactful software products.
              </li>
            </ul>
          </div>
        </article>
        <article className="experience">
          {/* SECOND EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/markanyx-logo.png")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">2. Markanyx Solutions Inc.</p>
              <p>Junior LMS Analyst</p>
              <p>January 2024 - June 2024</p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              NEED TO UPDATE I worked as a Junior Learning Management System
              (LMS) Analyst at Markanyx Solutions Inc. I was responsible for
              managing the LMS platform, creating and maintaining online
              courses, and providing technical support to users.
            </p>

            <p className="experience_section_text">TECHNICAL WORK DESCRIPTION</p>
            <ul className="technical_description">
              <li>
                Developed and enhanced client-requested features and resolved
                bugs for web-based projects using PHP, JavaScript, CSS, HTML,
                and SQL.
              </li>
              <li>
                Utilized Git, Linux commands, Docker, and Bitbucket for version
                control, server management, and deployment.
              </li>
              <li>
                Provided technical customer support and resolved issues via a
                ticketing system.
              </li>
              <li>
                Conducted client meetings for demos, support discussions, and
                feature request evaluations, fostering clear communication and
                collaboration.
              </li>
              <li>
                Written comprehensive documentation for implemented features and
                test cases.
              </li>
            </ul>
          </div>
        </article>
        <article className="experience">
          {/* Third EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/Romnica.jpeg")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">3. Romnica LTD.</p>
              <p>Lead Software Developer</p>
              <p>May 2023 - December 2023</p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              NEED TO UPDATE I worked as a Lead Software Developer at Romnica
              LTD. I led a team of software engineers in designing and building
              a cross-platform mobile app, RoPro, from concept to release on app
              stores.
            </p>

            <p className="experience_section_text">TECHNICAL WORK DESCRIPTION</p>
            <ul className="technical_description">
              <li>
                Led a team of software engineers in designing and building a
                cross-platform mobile app, RoPro, from concept to release on app
                stores.
              </li>
              <li>
                Collaborated with clients to define features and updates,
                ensuring alignment with user needs and business goals.
              </li>
              <li>
                Developed end-to-end functionality using React Native, AWS
                services (Amplify, Lambda, DynamoDB), JavaScript, and SQL.
              </li>
              <li>
                Implemented advanced features such as CRUD operations and API
                integrations.
              </li>
              <li>
                Achieved a user base of 170+ active users and over 9,000 store
                impressions through strategic development and marketing efforts.
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export default WorkExperienceScreen;
