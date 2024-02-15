interface IPaymentBannerProps {
  type: string;
  active: boolean;
  onClick: (type: string) => void;
}
interface IContactDetailProps {
  firstName: string;
  lastName: string;
  email: string;
  telNumber: string;
}
interface IEventBannerCheckoutProps {
  artist: string;
  imgSrc: string;
  price: number;
  typeTicket: string;
  quantity: number;
}
interface IPayBannerProps {
  type: string;
}
