import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/vli");
  };
  return (
    <div className="welcome">
      <button
        onClick={handleNavigation}
        onScroll={handleNavigation}
        className="welcome-btn"
      >
        Welcome!
      </button>
    </div>
  );
};

export default Welcome;
