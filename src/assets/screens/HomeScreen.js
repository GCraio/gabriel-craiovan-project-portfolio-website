import React from "react";
import "../styles/styles.css";

function HomeScreen() {
  return (
    <main className="HomeScreen_main_container">
      <section className="intro_section">
        <h1>Hello!</h1>
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
        <h1>Project Portfolio</h1>

        <article className="experience">
          {/* FIRST EXPERIENCE */}
          <h2>1. StudentSphere</h2>
          <h3>Sole Creator</h3>
          <h3>March 2024 – December 2024</h3>
          <img
            className="HomeScreen_main_image"
            src={require("../images/studentsphere-logo.png")}
            alt="Romdova Logo"
          />
          <h4>Description:</h4>
          <p>
            StudentSphere is a cross platform mobile application, designed to
            connect students across canada through events. Users can create/join
            events from other students at their university!
          </p>

          <h4>Technical Work Description:</h4>
          <ul className="technical_description">
            <li>
              Designed and developed a cross-platform mobile app from concept to
              launch on app stores.
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
              Designed and executed marketing campaigns that resulted in a 167%
              increase in user impressions across app stores.
            </li>
            <li>
              Implemented advanced features such as user authentication, CRUD
              operations, and API integrations.
            </li>
          </ul>

          <h4>Results:</h4>
          <div className="image_grid">
            <div className="image_container">
              <img
                src={require("../images/studentSphere_iphoneSC_1.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>View upcoming events</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/studentSphere_iphoneSC_2.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Join an event</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/studentSphere_iphoneSC_3.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Keyword search list</p>
            </div>
          </div>

          {/* Second EXPERIENCE */}
          <h2>2. RoPro</h2>
          <h3>Lead Software Developer</h3>
          <h3>May 2023 - December 2023</h3>
          <img
            className="HomeScreen_main_image"
            src={require("../images/ropro_logo.png")}
            alt="Romdova Logo"
          />
          <h4>Description:</h4>
          <p>
            RoPro is a cross-platform mobile application, designed to introduce
            construction framers with a software tool help automation window and
            door installation by generating a shareable and accurate cut-list.
          </p>

          <h4>Technical Work Description:</h4>
          <ul className="technical_description">
            <li>
              Led a team of software engineers in designing and building a
              cross-platform mobile app, RoPro, from concept to release on app
              stores.
            </li>
            <li>
              Collaborated with clients to define features and updates, ensuring
              alignment with user needs and business goals.
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

          <h4>Results:</h4>
          <div className="image_grid">
            <div className="image_container">
              <img
                src={require("../images/ropro_iphoneSC_1.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>User project list</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/ropro_iphoneSC_2.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Project editor</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/ropro_iphoneSC_3.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Project viewer and exporter</p>
            </div>
          </div>

          {/* Third EXPERIENCE */}
          <h2>3. Snipr-Buzz</h2>
          <h3>Sole Creator</h3>
          <h3>December 2024 – January 2025</h3>
          <img
            className="HomeScreen_main_image"
            src={require("../images/snipr-buzz-logo.jpeg")}
            alt="Romdova Logo"
          />
          <h4>Description:</h4>
          <p>
            Snipr-Buzz is a web application designed for users to search for the
            best barbers in their city, and where barbers/hairstylist can create
            profiles for users to find them. Barbers can upload photos of work,
            display their services, reviews, social media links, and booking
            information. Snipr-Buzz is a platform to streamline connecting
            barbers to clients, and make clients feel confident in choosing
            their barber.
          </p>

          <h4>Technical Work Description:</h4>
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
              Ensured seamless user authentication and efficient data management
              across the application.
            </li>
            <li>
              Applied expertise in React, JavaScript, CSS, and Firebase for
              deployment and feature implementation.
            </li>
            <li>
              Delivered a scalable and user-friendly web application for diverse
              user needs.
            </li>
          </ul>

          <h4>Results:</h4>
          <div className="image_grid">
            <div className="image_container">
              <img
                src={require("../images/snpr_1.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Search for barbers</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/snpr_2.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Barber Profile</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/snpr_3.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Profile editor</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/snpr_4.png")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Profile viewer</p>
            </div>
          </div>

          {/* Fourth EXPERIENCE */}
          <h2>4. ChatGPT AI ChatBot Messenger</h2>
          <h3>Sole Creator</h3>
          <h3>October 2024</h3>
          <img
            className="HomeScreen_main_image"
            src={require("../images/chatgpt_messenger_logo.png")}
            alt="Romdova Logo"
          />
          <h4>Description:</h4>
          <p>
            The ChatGPT AI ChatBot Messenger mobile application was designed to
            showcase my ability to integrate an Learning Language Model within
            an application for a practical use. Users can have converstations
            with various bots in different chat rooms topics, have their
            conversations saved locally, and interact with the robots with
            speech.
          </p>

          <h4>Technical Work Description:</h4>
          <ul className="technical_description">
            <li>
              Developed a cross-platform React Native mobile app with OpenAI API
              integration for interactive AI-based conversations.
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
              Implemented complete front-end and back-end development, including
              CRUD operations and API functionality.
            </li>
            <li>
              Designed a user-friendly interface with robust backend support,
              showcasing advanced AI integration capabilities.
            </li>
          </ul>

          <h4>Results:</h4>
          <div className="image_grid">
            <div className="image_container">
              <img
                src={require("../images/ai_chatgpt_3.PNG")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Chat-bot room selection</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/ai_chatgpt_1.PNG")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>New chat room</p>
            </div>
            <div className="image_container">
              <img
                src={require("../images/ai_chatgpt_2.PNG")}
                alt="Romdova Logo"
                className="uploaded_image"
              />
              <p>Saved chat rooms</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default HomeScreen;
