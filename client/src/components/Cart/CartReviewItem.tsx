/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/prop-types */
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../../pages/store';
import { useGetOneEvent } from '../../api/eventQueries';
import { countDate } from '../../utils/dateFunctions';
import { removeFromCart } from '../../features/cartSlice';
import { FormattedMessage } from 'react-intl';

interface ITicketType {
  _id: string;
  category: string[];
  prices: { USD: number; EUR: number; CZK: number };
  ticket_name: {
    cs: string;
    en: string;
  };
}
interface IEvent {
  image: string;
  name: {
    en: string;
    cs: string;
  };
  address_id: {
    name_of_place: string;
  };
  date_of_the_event: string;
  ticket_types: ITicketType[];
}
const CartItemReview: React.FC<ICartReviewItem> = ({
  eventId,
  ticketType,
  quantity,
  countPrice
}) => {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(removeFromCart({ eventId, ticketType }));
  };
  const [isEventDataLoaded, setIsEventDataLoaded] = useState(false);

  const {
    data: eventQueryData,
    error: eventQueryError,
    isLoading: eventQueryIsLoading
  } = useGetOneEvent(eventId);

  const eventData = eventQueryData as unknown as IEvent | null;

  const [price, setPrice] = useState<number>(0);

  const calculatePrice = (): void => {
    const ticketTypeFind = eventData?.ticket_types.find((type) => type.category[0] === ticketType);
    if (ticketTypeFind) {
      if (appLanguage === 'cs') {
        const priceOfTicket = quantity * ticketTypeFind.prices.CZK;
        setPrice(priceOfTicket);
      } else if (appLanguage === 'en') {
        const priceOfTicket = quantity * ticketTypeFind.prices.EUR;
        setPrice(priceOfTicket);
      }
    }
  };

  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    countPrice(price);
  }, [price, cart]);

  const renderTicketName = (): string => {
    if (eventData) {
      const ticketTypeFind = eventData?.ticket_types.find(
        (type) => type.category[0] === ticketType
      );
      if (ticketTypeFind) {
        return appLanguage === 'cs'
          ? ticketTypeFind?.ticket_name.cs
          : ticketTypeFind?.ticket_name.en;
      } else return '';
    } else return '';
  };

  useEffect(() => {
    if (eventData && !isEventDataLoaded) {
      console.log('nastavuji cenu');
      setIsEventDataLoaded(true);
      calculatePrice();
    }
  }, [eventData, isEventDataLoaded]);

  const correctFormatDate = countDate(eventData?.date_of_the_event ?? '');

  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        gap: '50px'
      }}>
      {eventQueryError ? <Box>Něco se nepovedlo</Box> : null}
      {eventQueryIsLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            sx={{
              width: { xs: '40%', md: '20%', lg: '10%' }
            }}>
            <img src={eventData?.image} alt="Image of artist" style={{ maxHeight: '80px' }} />
          </Box>
          <Box sx={{ width: { xs: '60%', md: '80%', lg: '90%' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                sx={{ fontSize: { xs: '15px', md: '16px', lg: '18px' }, fontWeight: 800 }}>
                {appLanguage === 'cs' ? eventData?.name.cs : eventData?.name.en}
              </Typography>
              <CloseIcon onClick={handleDelete} sx={{ cursor: 'pointer' }} />
            </Box>
            <Typography sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' }, fontWeight: 400 }}>
              {correctFormatDate}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{ fontSize: { xs: '12px', md: '13px', lg: '15px' }, fontWeight: 400 }}>
                {eventData?.address_id.name_of_place}
              </Typography>
              <Typography
                sx={{ fontWeight: 800, fontSize: { xs: '12px', md: '15px', lg: '20px' } }}>
                {price} {appLanguage === 'cs' ? 'CZK' : 'EUR'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#80797B' }}>
                {renderTicketName()}
              </Typography>
              <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#80797B' }}>
                <FormattedMessage id="app.cartpage.quantity" /> {quantity}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartItemReview;
