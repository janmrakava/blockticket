import { Box, Grid, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import {
  FavoriteBannerButton,
  FavoriteBannerGrid,
  GridFavoriteBanner,
  TypographyFavoriteBannerHeader,
  TypographyFavoriteBannerText
} from '../../styles/styles';

const FavoriteBanner: React.FC = () => {
  return (
    <FavoriteBannerGrid container sx={{ display: { lg: 'flex', md: 'block', xs: 'block' } }}>
      <Box>
        <Grid item xs={12} md={12} lg={12} sx={{ padding: { xs: '20px' } }}>
          <TypographyFavoriteBannerHeader
            sx={{
              marginTop: { lg: '50px' }
            }}>
            <FormattedMessage id="app.favoritebanner.heading" />
            <FavoriteBorderIcon fontSize="large" />
          </TypographyFavoriteBannerHeader>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TypographyFavoriteBannerText>
            <FormattedMessage id="app.favoritebanner.note" />
          </TypographyFavoriteBannerText>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <GridFavoriteBanner
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            gap: { lg: '100px' }
          }}>
          <FavoriteBannerButton size="large">
            <FormattedMessage id="app.login.login" />
          </FavoriteBannerButton>

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
        </GridFavoriteBanner>
      </Box>
    </FavoriteBannerGrid>
  );
};

export default FavoriteBanner;
