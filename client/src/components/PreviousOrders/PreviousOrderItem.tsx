import { Box, Typography } from '@mui/material';

/* eslint-disable react/prop-types */
interface IPreviousOrderItemProps {
  id: string;
  date: Date;
  price: number;
  numberOfTickets: number;
  state: string;
}

const PreviousOrderItem: React.FC<IPreviousOrderItemProps> = ({
  id,
  date,
  price,
  numberOfTickets,
  state
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid red',
        padding: '30px'
      }}>
      <Typography>{id}</Typography>
      <Typography>{date.getDate()}</Typography>
      <Typography>{price}</Typography>
      <Typography>{numberOfTickets}</Typography>
      <Typography>{state}</Typography>
    </Box>
  );
};

export default PreviousOrderItem;
