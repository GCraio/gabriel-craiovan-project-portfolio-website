import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <main className="home_screen">
      <header className="home_header_container">
        <div>
          <button className="initial_button" onClick={() => navigate("*")}>
            Project Portfolio
          </button>
          <button
            className="initial_button"
            onClick={() => navigate("/work-experiences")}
          >
            Work Experiences
          </button>
        </div>
      </header>
      <p className="intro_main_text">Hello! Welcome to my portfolio website!</p>
      <section className="work_experiences_section">
        <p className="main_title">ABOUT ME</p>
        <article className="experience">
          <div className="experience_header_info">
            <img
              className="HomeScreen_main_image"
              src={require("../images/headshot.JPG")}
              alt="Headshot"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">Gabriel Craiovan</p>
              <p>
                I'm a Software Engineering student at the University of Calgary
                and the founder of <strong>Romdova LTD</strong>. I'm passionate
                about creating innovative software solutions that solve
                real-world problems and leave a meaningful impact.
              </p>
              <p className="work_title">Contact</p>
              <p>
                {" "}
                <img
                  className="icon_text"
                  src={require("../icons/envelope.png")}
                  alt="Headshot"
                />
                gabriel.const.craiovan@gmail.com
              </p>
              <p>
                {" "}
                <img
                  className="icon_text"
                  src={require("../icons/phone-flip.png")}
                  alt="Headshot"
                />
                (403) 816-3118
              </p>
              <p>
                <a
                  href={
                    "https://www.linkedin.com/in/gabriel-craiovan-011008241/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/linkedin.png")}
                    alt="Headshot"
                  />
                  Linkedin
                </a>
              </p>
              <p>
                <a
                  href={"https://github.com/GCraio"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/github.png")}
                    alt="Headshot"
                  />
                  Github Profile
                </a>
              </p>
              <p>
                <a
                  href={"https://gabrielcra1225.wixsite.com/romdovaltd"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/url.png")}
                    alt="Headshot"
                  />
                  Company Website
                </a>
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="work_experiences_section">
        <p className="main_title">PROJECTS</p>

        <article className="experience">
          {/* FIRST EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/studentsphere-logo.png")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">1. StudentSphere</p>
              <p>Sole Creator</p>
              <p>March 2024 – December 2024</p>
              <p>
                <a
                  href={
                    "https://apps.apple.com/ca/app/studentsphere/id6737998362"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/app-store.png")}
                    alt="Headshot"
                  />
                  Apple Store
                </a>
              </p>
              <p>
                <a
                  href={
                    "https://play.google.com/store/search?q=studentSphere&c=apps&hl=en_CA"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/playstore.png")}
                    alt="Headshot"
                  />
                  Google Play Store
                </a>
              </p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              StudentSphere is a cross platform mobile application, designed to
              connect students across canada through events. Users can
              create/join events from other students at their university!
            </p>

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
            <ul className="technical_description">
              <li>
                Designed and developed a cross-platform mobile app from concept
                to launch on app stores.
              </li>
              <li>
                Built the app using React Native, Firebase, Node.js, JavaScript,
                and SQL, handling all front-end and back-end functionalities.
              </li>
              <li>
                Integrated Stripe and PayPal APIs for secure payment processing
                and automated daily payout systems using cron jobs.
              </li>
              <li>
                Designed and executed marketing campaigns that resulted in a
                167% increase in user impressions across app stores.
              </li>
              <li>
                Implemented advanced features such as user authentication, CRUD
                operations, and API integrations.
              </li>
            </ul>

            <p className="experience_section_text">RESULTS</p>
            <div className="image_grid">
              <div className="image_container">
                <a
                  href={require("../images/studentSphere_iphoneSC_1.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/studentSphere_iphoneSC_1.png")}
                    alt="View upcoming events"
                    className="uploaded_image"
                  />
                </a>
                <p>View upcoming events</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/studentSphere_iphoneSC_2.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/studentSphere_iphoneSC_2.png")}
                    alt="Join an event"
                    className="uploaded_image"
                  />
                </a>
                <p>Join an event</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/studentSphere_iphoneSC_3.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/studentSphere_iphoneSC_3.png")}
                    alt="Keyword search list"
                    className="uploaded_image"
                  />
                </a>
                <p>Keyword search list</p>
              </div>
            </div>
          </div>
        </article>
        <article className="experience">
          {/* Second EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/ropro_logo.png")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">2. RoPro</p>
              <p>Lead Software Developer</p>
              <p>May 2023 - December 2023</p>
              <p>
                <a
                  href={"https://apps.apple.com/ca/app/ropro/id6450377614"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/app-store.png")}
                    alt="Headshot"
                  />
                  Apple Store Url
                </a>
              </p>
              <p>
                <a
                  href={
                    "https://play.google.com/store/apps/details?id=com.gabwincalc.wincalc&hl=en_CA"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/playstore.png")}
                    alt="Headshot"
                  />
                  Google Play Store
                </a>
              </p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              RoPro is a cross-platform mobile application, designed to
              introduce construction framers with a software tool help
              automation window and door installation by generating a shareable
              and accurate cut-list.
            </p>

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
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

            <p className="experience_section_text">RESULTS</p>
            <div className="image_grid">
              <div className="image_container">
                <a
                  href={require("../images/ropro_iphoneSC_1.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ropro_iphoneSC_1.png")}
                    alt="User project list"
                    className="uploaded_image"
                  />
                </a>
                <p>User project list</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/ropro_iphoneSC_2.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ropro_iphoneSC_2.png")}
                    alt="Project editor"
                    className="uploaded_image"
                  />
                </a>
                <p>Project editor</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/ropro_iphoneSC_3.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ropro_iphoneSC_3.png")}
                    alt="Project viewer and exporter"
                    className="uploaded_image"
                  />
                </a>
                <p>Project viewer and exporter</p>
              </div>
            </div>
          </div>
        </article>
        <article className="experience">
          {/* Third EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/snipr-buzz-logo.jpeg")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">3. Snipr-Buzz</p>
              <p>Sole Creator</p>
              <p>December 2024 – January 2025</p>
              <p>
                <a
                  href={"https://barberappfirebase.web.app/home"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/url.png")}
                    alt="Headshot"
                  />
                  Website Url
                </a>
              </p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              Snipr-Buzz is a web application designed for users to search for
              the best barbers in their city, and where barbers/hairstylist can
              create profiles for users to find them. Barbers can upload photos
              of work, display their services, reviews, social media links, and
              booking information. Snipr-Buzz is a platform to streamline
              connecting barbers to clients, and make clients feel confident in
              choosing their barber.
            </p>

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
            <ul className="technical_description">
              <li>
                Built a React-based web application with Firebase authentication
                and Microsoft Azure Cosmos DB for data storage.
              </li>
              <li>
                Developed comprehensive front-end and back-end solutions,
                including CRUD functionality and API integrations.
              </li>
              <li>
                Ensured seamless user authentication and efficient data
                management across the application.
              </li>
              <li>
                Applied expertise in React, JavaScript, CSS, and Firebase for
                deployment and feature implementation.
              </li>
              <li>
                Delivered a scalable and user-friendly web application for
                diverse user needs.
              </li>
            </ul>

            <p className="experience_section_text">RESULTS</p>
            <div className="image_grid">
              <div className="image_container">
                <a
                  href={require("../images/snpr_1.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/snpr_1.png")}
                    alt="Search for barbers"
                    className="uploaded_image"
                  />
                </a>
                <p>Search for barbers</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/snpr_2.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/snpr_2.png")}
                    alt="Barber Profile"
                    className="uploaded_image"
                  />
                </a>
                <p>Barber Profile</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/snpr_3.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/snpr_3.png")}
                    alt="Profile editor"
                    className="uploaded_image"
                  />
                </a>
                <p>Profile editor</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/snpr_4.png")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/snpr_4.png")}
                    alt="Profile viewer"
                    className="uploaded_image"
                  />
                </a>
                <p>Profile viewer</p>
              </div>
            </div>
          </div>
        </article>
        <article className="experience">
          {/* Fourth EXPERIENCE */}
          <div className="experience_header_info">
            <img
              className="HomeScreen_work_image"
              src={require("../images/chatgpt_messenger_logo.png")}
              alt="Romdova Logo"
            />
            <div className="experience_header_info_text_conatiner">
              <p className="work_title">4. ChatGPT AI ChatBot Messenger</p>
              <p>Sole Creator</p>
              <p>October 2024</p>
              <p>
                <a
                  href={"https://github.com/GCraio/AISpeechProject"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/github.png")}
                    alt="Headshot"
                  />
                  Github Repo
                </a>
              </p>
            </div>
          </div>

          <div className="experience_description_container">
            <p className="experience_section_text">DESCRIPTION</p>
            <p>
              The ChatGPT AI ChatBot Messenger mobile application was designed
              to showcase my ability to integrate an Learning Language Model
              within an application for a practical use. Users can have
              converstations with various bots in different chat rooms topics,
              have their conversations saved locally, and interact with the
              robots with speech.
            </p>

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
            <ul className="technical_description">
              <li>
                Developed a cross-platform React Native mobile app with OpenAI
                API integration for interactive AI-based conversations.
              </li>
              <li>
                Implemented a local SQL database functionality to save user
                conversations directly on devices.
              </li>
              <li>
                Incorporated speech-to-text and text-to-speech features for
                enhanced accessibility and user engagement.
              </li>
              <li>
                Implemented complete front-end and back-end development,
                including CRUD operations and API functionality.
              </li>
              <li>
                Designed a user-friendly interface with robust backend support,
                showcasing advanced AI integration capabilities.
              </li>
            </ul>

            <p className="experience_section_text">RESULTS</p>
            <div className="image_grid">
              <div className="image_container">
                <a
                  href={require("../images/ai_chatgpt_3.PNG")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ai_chatgpt_3.PNG")}
                    alt="Chat-bot room selection"
                    className="uploaded_image"
                  />
                </a>
                <p>Chat-bot room selection</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/ai_chatgpt_1.PNG")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ai_chatgpt_1.PNG")}
                    alt="New chat room"
                    className="uploaded_image"
                  />
                </a>
                <p>New chat room</p>
              </div>
              <div className="image_container">
                <a
                  href={require("../images/ai_chatgpt_2.PNG")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("../images/ai_chatgpt_2.PNG")}
                    alt="Saved chat rooms"
                    className="uploaded_image"
                  />
                </a>
                <p>Saved chat rooms</p>
              </div>
            </div>
          </div>
        </article>
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
              <p>
                <a
                  href={"https://www.linkedin.com/company/105600089/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/linkedin.png")}
                    alt="Headshot"
                  />
                  Linkedin
                </a>
              </p>
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

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
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
              <p>
                <a
                  href={
                    "https://www.linkedin.com/company/markanyx/posts/?feedView=all"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/linkedin.png")}
                    alt="Headshot"
                  />
                  Linkedin
                </a>
              </p>
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

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
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
              <p>
                <a
                  href={
                    "https://www.linkedin.com/company/romnica-ltd/posts/?feedView=all"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon_text"
                    src={require("../icons/linkedin.png")}
                    alt="Headshot"
                  />
                  Linkedin
                </a>
              </p>
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

            <p className="experience_section_text">
              TECHNICAL WORK DESCRIPTION
            </p>
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

export default HomeScreen;
