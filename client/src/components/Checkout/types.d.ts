interface IPaymentBannerProps {
  type: string;
  active: boolean;
  onClick: (type: string) => void;
}
