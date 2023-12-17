import NavButton from './NavButton';
import Paths from '../app/lib/paths';
import NavLogo from './NavLogo';

const navButtons = [
  {
    destination: Paths.INDEX,
    title: 'Home',
  },
  {
    destination: Paths.USERS,
    title: 'Users',
  },
  {
    destination: Paths.DASHBOARD,
    title: 'Dashboard',
  },
];

const Header = () => {
  const content = (
    <header className="w-full min-h-[4rem] flex justify-between items-center px-2">
      <NavLogo />
      <nav className="flex gap-2 py-2">
        {navButtons.map((button, index) => (
          <NavButton
            key={index}
            destination={button.destination}
            title={button.title}
          />
        ))}
      </nav>
    </header>
  );
  return content;
};

export default Header;
