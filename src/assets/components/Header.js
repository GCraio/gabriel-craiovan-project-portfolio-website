import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="home_header_container">
      <div>
        <button
          className="initial_button"
          onClick={() => navigate("*")}
        >
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
  );
};

export default Header;
