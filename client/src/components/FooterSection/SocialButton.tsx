import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface ISocialButtonProps {
  type: string;
  Icon: React.ElementType | string;
}

const SocialButton: React.FC<ISocialButtonProps> = ({ type, Icon }) => {
  return (
    <Link to={`/${type}`}>
      <Button sx={{ color: '#fff', fontSize: '24px' }}>
        <Icon />
      </Button>
    </Link>
  );
};

export default SocialButton;
