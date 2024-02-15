interface ICartReviewItem {
  artist: string;
  imgSrc: string;
  date: string;
  place: string;
  ticketType: string;
  price: number;
  quantity: number;
}

interface ICartStepsProps {
  active: string;
}
interface INumberStepProps {
  active: boolean;
  number: number;
}
interface ICashOutProps {
  prices: number[];
  discount: number;
  showButton: boolean;
}
