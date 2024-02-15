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
