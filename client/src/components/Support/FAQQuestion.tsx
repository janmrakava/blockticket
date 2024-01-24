import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/* eslint-disable react/prop-types */
interface IFAQQuestionProps {
  text: string;
  showAnswer: boolean;
  handleShowAnswer: () => void;
}
const FAQQuestion: React.FC<IFAQQuestionProps> = ({ text, showAnswer, handleShowAnswer }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <h3>{text}</h3>
      <Button
        onClick={() => {
          handleShowAnswer(name);
        }}>
        <Typography
          sx={{
            transform: showAnswer ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: '0.3s ease'
          }}>
          <KeyboardArrowDownIcon fontSize="large" />
        </Typography>
      </Button>
    </Box>
  );
};
export default FAQQuestion;
