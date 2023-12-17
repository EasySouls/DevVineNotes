import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type NavButtonProps = {
  destination: string;
  title: string;
};

const NavButton = ({ destination, title }: NavButtonProps) => {
  return (
    <Button variant="contained">
      <Link to={destination}>{title}</Link>
    </Button>
  );
};

export default NavButton;
