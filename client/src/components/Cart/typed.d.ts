interface ICartReviewItem {
  eventId: string;
  ticketType: string;
  quantity: number;
  countPrice: (price: number) => void;
}

interface ICartStepsProps {
  active: string;
}
interface INumberStepProps {
  active: boolean;
  number: number;
}
interface ICashOutProps {
  sumPrice: number;
  discount: number;
  showButton: boolean;
}
