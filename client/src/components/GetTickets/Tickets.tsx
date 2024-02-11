/* eslint-disable react/prop-types */
import { Box, Button, Divider, FormControl, Grid, Snackbar, Typography } from '@mui/material';
import { memo, useState } from 'react';

import { FormattedMessage } from 'react-intl';
import { TextFieldStyled, TicketsBox } from './styled';
import { type RootState } from '../../pages/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

const TicketsBanner: React.FC<ITickets> = ({ tickets, eventId }) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);
  const cart = useSelector((state: RootState) => state.cart);
  const [succesfullAddTickets, setSuccessfullAddTickets] = useState<boolean>(false);

  const [selectedTickets, setSelectedTickets] = useState<Record<string, number>>({});

  const dispatch = useDispatch();

  console.log('Cart: ', cart);
  const handleQuantityChange = (index: number, value: number): void => {
    const ticketType = tickets[index].category;
    setSelectedTickets((prevState) => ({
      ...prevState,
      [ticketType]: value
    }));
  };
  const handleAddToCart = (): void => {
    Object.entries(selectedTickets).forEach(([ticketType, quantity]) => {
      const infoTickets = { eventId, ticketType, quantity };
      dispatch(addToCart(infoTickets));
    });

    setSuccessfullAddTickets(true);
    setTimeout(() => {
      setSuccessfullAddTickets(false);
    }, 5000);

    setSelectedTickets({});
  };

  const renderTickets = tickets.map((ticket, index) => {
    return (
      <TicketsBox key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row', lg: 'row' },
            justifyContent: 'space-between',
            width: '100%'
          }}>
          <Typography sx={{ width: '180px', fontWeight: 600 }}>
            {appLanguage === 'cs' ? ticket.ticket_name.cs : ticket.ticket_name.en}
          </Typography>
          <Typography sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            {ticket.quantity - ticket.sold}
          </Typography>
          <Typography sx={{ marginRight: '10px' }}>
            {appLanguage === 'cs' ? `${ticket.prices.CZK} CZK` : `${ticket.prices.EUR} EUR`}
          </Typography>
        </Box>
        <TextFieldStyled
          id={`ticket-${eventId}-quantity`}
          label="Počet"
          type="number"
          value={selectedTickets[index]}
          onChange={(e) => {
            handleQuantityChange(index, parseInt(e.target.value));
          }}
          InputProps={{ inputProps: { min: 0 } }}
        />
      </TicketsBox>
    );
  });
  return (
    <Grid item xs={12} md={12} lg={12}>
      <h1>
        <FormattedMessage id="app.gettickets.ticketsHeading" />
      </h1>
      <FormControl sx={{ display: 'flex' }}>{renderTickets}</FormControl>
      <Divider sx={{ background: '#80797B', marginTop: '10px' }} />
      <Button
        variant="contained"
        sx={{ marginTop: '20px', float: 'right' }}
        onClick={handleAddToCart}>
        Koupit vstupenky
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={succesfullAddTickets}
        autoHideDuration={5000}
        message={
          appLanguage === 'cs'
            ? 'Vstupenky uspěšně přidány do košíku!'
            : 'Tickets successfully added to the cart!'
        }
      />
    </Grid>
  );
};

export const Tickets = memo(TicketsBanner);
