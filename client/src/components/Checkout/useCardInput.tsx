import { useState } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import { useNavigate } from 'react-router-dom';
import { createNewTicket } from '../../api/ticket/ticket';
import { type Ticket } from '../../utils/interfaces';

export function useCardInput(setShowPaymentInProcess: (newState: boolean) => void): any {
  const navigate = useNavigate();
  const [cardNumberState, setCardNumberState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const [cardCVVState, setCardCVVState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const [cardExpirationDateState, setExpirationDateState] = useState<ICardData>({
    value: '',
    isValid: false
  });
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const validateCardNumber = (cardNumber: string): boolean => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');

    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumberWithoutSpaces);
  };
  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    const newValueWithoutSpaces = value.replace(/\s/g, '');

    const newValueWithSpaces = newValueWithoutSpaces.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');

    const isValid = validateCardNumber(newValueWithoutSpaces);
    setCardNumberState({
      value: newValueWithSpaces,
      isValid
    });
  };

  const validateCVV = (cardCVV: string): boolean => {
    const cardCVVRegex = /^\d{3,4}$/;
    return cardCVVRegex.test(cardCVV) && cardCVV.length < 4;
  };
  const handleCardCVVChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const isValid = validateCVV(value);
    setCardCVVState({
      value,
      isValid
    });
  };
  const validateExpirationDate = (monthYearString: string): boolean => {
    const today = new Date();
    const cleanedMonthYearString = monthYearString.replace('/', '');
    const month = parseInt(cleanedMonthYearString.substring(0, 2), 10);
    const year = parseInt(cleanedMonthYearString.substring(2), 10) + 2000;

    const dateToValidate = new Date(year, month - 1);

    if (dateToValidate > today) {
      return true;
    } else {
      return false;
    }
  };
  const handleExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const isValid = validateExpirationDate(value);
    setExpirationDateState({
      value,
      isValid
    });
  };

  const generateRandomSector = (): string => {
    const sectors = ['Stage', 'East', 'West', 'North', 'South', 'VIP'];
    const index = Math.floor(Math.random() * sectors.length);
    return sectors[index];
  };
  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1));
  };

  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const isValidForm =
      cardCVVState.isValid && cardExpirationDateState.isValid && cardNumberState.isValid;

    if (isValidForm) {
      setShowPaymentInProcess(true);
      try {
        const requests = cart.flatMap((item) => {
          const newTickets: Ticket[] = [];
          for (let i = 0; i < item.quantity; i++) {
            const sector = generateRandomSector();
            const row = generateRandomNumber(1, 20);
            const seat = generateRandomNumber(1, 50);
            const newTicket: Ticket = {
              eventName: item.name.en,
              price: item.prices.CZK,
              date: item.date,
              category: item.ticketType,
              zone: item.ticketType,
              sector,
              row,
              seat
            };
            newTickets.push(newTicket);
          }

          return newTickets;
        });

        await createNewTicket(requests);

        setShowPaymentInProcess(false);
        navigate('/ordercomplete', { state: { success: true } });
      } catch (error) {
        console.error('Chyba při zpracování objednávky:', error);
        setShowPaymentInProcess(false);
      }
    }
  };

  return {
    handleCardCVVChange,
    handleCardNumberChange,
    handleExpirationDateChange,
    handleSubmit,
    cardNumberState,
    cardCVVState,
    cardExpirationDateState,
    appLanguage
  };
}
