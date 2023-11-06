import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FormattedMessage } from 'react-intl';
import useStyles from '../../styles/styles';
import { Link } from 'react-router-dom';

const FavoriteBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.favoriteBanner}
      sx={{
        display: { lg: 'flex', md: 'block', xs: 'block' },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Grid item xs={12} md={12} lg={12} sx={{ padding: { xs: '20px' } }}>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: '900',
              fontSize: '25px',
              marginTop: { lg: '50px' },
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
              whiteSpace: 'pre-line'
            }}
          >
            <FormattedMessage id="app.favoritebanner.heading" />
            <FavoriteBorderIcon fontSize="large" />
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            sx={{
              color: '#fff',
              margin: '10px 20px',
              fontWeight: '400',
              fontSize: '18px',
              marginBottom: '50px'
            }}
          >
            <FormattedMessage id="app.favoritebanner.note" />
          </Typography>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            color: '#fff',
            margin: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { lg: '100px' }
          }}
        >
          <Button
            sx={{
              color: '#017CCC',
              background: '#fff',
              fontWeight: '900',
              borderRadius: '70px',
              padding: '10px 30px'
            }}
            size="large"
          >
            <FormattedMessage id="app.login.login" />
          </Button>

          <IconButton>
            <Link to="/twitter" style={{ textDecoration: 'none', color: '#fff' }}>
              <TwitterIcon fontSize="large" />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/facebook" style={{ textDecoration: 'none', color: '#fff' }}>
              <FacebookIcon fontSize="large" />
            </Link>
          </IconButton>
        </Grid>
      </Box>
    </Grid>
  );
};

export default FavoriteBanner;
