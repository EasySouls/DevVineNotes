import { Link } from 'react-router-dom';

type NavButtonProps = {
  destination: string;
  title: string;
};

const NavButton = ({ destination, title }: NavButtonProps) => {
  return (
    <button className="bg-blue-600 px-3 py-2">
      <Link to={destination}>{title}</Link>
    </button>
  );
};

export default NavButton;
