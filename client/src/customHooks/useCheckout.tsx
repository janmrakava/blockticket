import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { type RootState } from '../pages/store';
import { Divider } from '@mui/material';
import { PaymentBanner } from '../components/Checkout/PaymentBanner';
import { jwtDecode } from 'jwt-decode';
import { useGetUserInfo } from '../api/userQueries';

interface DecodedToken {
  userId: string;
}

export const useCheckout = (): any => {
  const cookies = new Cookies();
  const [userId, setUserId] = useState<string>('');
  useEffect(() => {
    const token = cookies.get('authToken');
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      setUserId(decodedToken.userId);
    }
  }, []);
  console.log(userId);
  const {
    data: userData,
    isLoading: isUserDataLoading,
    error: isUserDataError
  } = useGetUserInfo(userId);

  console.log(userData, isUserDataError, isUserDataLoading);

  const [activeMethod, setActiveMethod] = useState<string>('card');
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const changePaymentMethod = (type: string): void => {
    setActiveMethod(type);
  };
  const paymentMethods = ['card', 'banktransfer', 'paypal', 'applepay', 'googlepay'];

  const [price, setPrice] = useState<number>(0);
  const cart = useSelector((state: RootState) => state.cart);
  const handleCountPrice = (): void => {
    const sumPrice = cart.reduce((accumulator, item) => {
      if (appLanguage === 'cs') {
        return accumulator + item.quantity * item.prices.CZK;
      } else {
        return accumulator + item.quantity * item.prices.EUR;
      }
    }, 0);

    setPrice(sumPrice);
  };

  useEffect(() => {
    handleCountPrice();
  }, [cart]);
  const renderPaymentMethods = paymentMethods.map((method, index) => {
    return (
      <>
        <PaymentBanner
          type={method}
          active={method === activeMethod}
          key={index}
          onClick={() => {
            changePaymentMethod(method);
          }}
        />
        <Divider sx={{ background: '#80797B', margin: '0 20px' }} />
      </>
    );
  });

  return {
    cookies,
    activeMethod,
    changePaymentMethod,
    userData,
    isUserDataLoading,
    isUserDataError,
    renderPaymentMethods,
    price,
    cart
  };
};
