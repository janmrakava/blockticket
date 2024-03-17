/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import { countDate } from '../../utils/function';
import { useNavigate } from 'react-router-dom';

interface IFavoriteBannerProps {
  id: string;
  name: {
    cs: string;
    en: string;
  };
  dateOfTheEvent: Date;
  image: string;
  place: string;
}

const FavoriteEventBanner: React.FC<IFavoriteBannerProps> = ({
  id,
  name,
  dateOfTheEvent,
  image,
  place
}) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event/${id}`);
  };
  const dateRender = countDate(dateOfTheEvent);
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        backgroundImage: `url(${image})`,
        height: '400px',
        cursor: 'pointer',
        backgroundSize: 'cover'
      }}
      onClick={handleNavigate}>
      <Typography>{appLanguage === 'cs' ? name.cs : name.en}</Typography>
      <Typography>{dateRender}</Typography>
      <Typography>{place}</Typography>
    </Grid>
  );
};

export default FavoriteEventBanner;
