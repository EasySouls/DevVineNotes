import { Avatar } from '@mui/material';

const ProfileIcon = () => {
  const isLoggedIn = false;

  return (
    <Avatar alt="avatar" src={isLoggedIn ? '/static/avatar.jpg' : undefined} />
  );
};

export default ProfileIcon;
