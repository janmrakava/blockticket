import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

interface IUserClickItem {
  text: string;
  imgSrc: string;
}

const UserClickItem: React.FC<IUserClickItem> = ({ text, imgSrc }) => {
  return (
    <>
      <Typography variant="h5" sx={{ margin: '10px 0', fontSize: '18px' }}>
        <Link
          to={`/${text}`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <img src={imgSrc} alt="Settings icon" style={{ width: '24px', height: '24px' }} />
          <FormattedMessage id={`app.userClick.${text}`} />
        </Link>
      </Typography>
    </>
  );
};

export default UserClickItem;
