/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import PopularBanner from './PopularBanner';

import moment from 'moment';

interface IEventProps {
  name: string;
  date: Date;
  place: string;
  popular: boolean;
  ticketSold: number;
  imgSrc: string;
}

const EventBanner: React.FC<IEventProps> = ({
  name,
  date,
  place,
  popular,
  ticketsSold,
  imgSrc
}) => {
  const NewDate = moment(date, 'DD-MM-YYYY');

  return (
    <>
      <Grid
        container
        sx={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', minHeight: '300px' }}>
        <Grid item xs={12}>
          <PopularBanner />
          <p>{ticketsSold}</p>
          <h1>{name}</h1>
          <p>{NewDate}</p>
          <p>{place}</p>
          <p></p>
        </Grid>
      </Grid>
    </>
  );
};

export default EventBanner;
