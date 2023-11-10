/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import { type IEventProps } from './MobileEventBanner';
import { countDate, countTickets } from '../../utils/function';

const SearchResultBanner: React.FC<IEventProps> = ({
  name,
  date,
  place,
  popular,
  ticketsSold,
  imgSrc
}) => {
  const newDate = countDate(date);
  const ticketSoldUpdated = countTickets(ticketsSold);
  return (
    <Grid
      container
      spacing={0}
      gap={3}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '50vh' }}>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default SearchResultBanner;
