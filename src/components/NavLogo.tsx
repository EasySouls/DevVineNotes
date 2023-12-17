import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Paths from '../app/lib/paths';

const NavLogo = () => {
  return (
    <div className="flex flex-row items-center">
      <button className="border border-black">
        <Link to={Paths.INDEX}>
          <FontAwesomeIcon icon={faBookAtlas} />
        </Link>
      </button>
      <h1 className="text-2xl font-semibold px-2">DevVine Notes</h1>
    </div>
  );
};

export default NavLogo;
