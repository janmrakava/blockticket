/* eslint-disable react/prop-types */
interface IFAQAnswerProps {
  text: string;
}
const FAQAnswer: React.FC<IFAQAnswerProps> = ({ text }) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};
export default FAQAnswer;
