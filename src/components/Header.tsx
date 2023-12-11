import { Link } from "react-router-dom";

const LoggedInHeader = () => {
  const content = (
    <header>
      <div className=''>
        <Link to='/notes'>
          <h1>Notes</h1>
        </Link>
        <nav>{/* Nav buttons */}</nav>
      </div>
    </header>
  );
  return content;
};

export default LoggedInHeader;
