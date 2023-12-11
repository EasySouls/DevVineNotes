import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/");

  let goHomeButton = null;
  if (pathname !== "/") {
    goHomeButton = (
      <button
        className='border border-black'
        title='Home'
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    <footer className=''>
      {goHomeButton}
      <p>Current User: </p>
      <p>Status: </p>
    </footer>
  );
  return content;
};

export default Footer;
