import { Box, Grid, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { FormattedMessage } from 'react-intl';
import {
  BoxFlexRow,
  FavoriteBannerButton,
  FavoriteBannerGridContainer,
  FavoriteBannerLink,
  GridFavoriteBannerItem,
  TypographyFavoriteBannerHeader,
  TypographyFavoriteBannerText
} from '../../styles/styles';

const FavoriteBanner: React.FC = () => {
  return (
    <FavoriteBannerGridContainer container>
      <Box>
        <Grid item xs={12} md={12} lg={12} sx={{ padding: { xs: '20px' } }}>
          <TypographyFavoriteBannerHeader>
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
      <BoxFlexRow>
        <GridFavoriteBannerItem
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            gap: { lg: '100px' }
          }}
        >
          <FavoriteBannerButton size="large">
            <FormattedMessage id="app.login.login" />
          </FavoriteBannerButton>

          <IconButton>
            <FavoriteBannerLink to="/twitter">
              <TwitterIcon fontSize="large" />
            </FavoriteBannerLink>
          </IconButton>
          <IconButton>
            <FavoriteBannerLink to="/facebook">
              <FacebookIcon fontSize="large" />
            </FavoriteBannerLink>
          </IconButton>
        </GridFavoriteBannerItem>
      </BoxFlexRow>
    </FavoriteBannerGridContainer>
  );
};

export default FavoriteBanner;
