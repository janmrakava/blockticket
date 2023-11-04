import { Divider, Grid, Grow, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from '../../styles/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import SocialButton from './SocialButton';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import FooterItem from './FooterItem';

const Footer: React.FC = () => {
  const classes = useStyles();
  const [showNetwork, setShowNetworks] = useState<boolean>(false);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showWhoWeAre, setShowWhoWeAre] = useState<boolean>(false);

  const handleChangeShow = (type: string): void => {
    switch (type) {
      case 'ournetwork':
        setShowNetworks((prev) => !prev);
        break;
      case 'help':
        setShowHelp((prev) => !prev);
        break;
      case 'whoweare':
        setShowWhoWeAre((prev) => !prev);
        break;
      default:
        console.log('error');
        break;
    }
  };

  return (
    <>
      <Grid container spacing={2} sx={{ color: '#fff' }}>
        <Grid item xs={12} sx={{ margin: '20px' }}>
          <Typography
            className={classes.footerHeading}
            variant="h2"
            sx={{ fontWeight: '900', fontSize: '30px' }}>
            TicketBlock
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            color: '#fff',
            justifyContent: 'space-between'
          }}>
          <SocialButton type="twitter" Icon={TwitterIcon} />
          <SocialButton type="facebook" Icon={FacebookIcon} />
          <SocialButton type="instagram" Icon={InstagramIcon} />
          <SocialButton type="youtube" Icon={YouTubeIcon} />
          <SocialButton type="linkedin" Icon={LinkedInIcon} />
        </Grid>
        <Grid item xs={12} sx={{ margin: '10px 20px' }}>
          <Typography>
            <FormattedMessage
              id="app.footer.terms"
              values={{
                Link: (chunks) => (
                  <Link to="/termofuse" style={{ color: '#fff' }}>
                    {chunks}
                  </Link>
                ),
                cta: (chunks) => <strong>{chunks}</strong>
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: '20px', marginRight: '20px' }}>
          <FooterItem
            name="ournetwork"
            showOptions={showNetwork}
            handleChangeShow={handleChangeShow}
          />
          <Divider className={classes.dividerThinner} />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: '20px', marginRight: '20px' }}>
          <FooterItem name="help" showOptions={showHelp} handleChangeShow={handleChangeShow} />
          <Divider className={classes.dividerThinner} />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
          <FooterItem
            name="whoweare"
            showOptions={showWhoWeAre}
            handleChangeShow={handleChangeShow}
          />
          <Divider className={classes.dividerThinner} />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
