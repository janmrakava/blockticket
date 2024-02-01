import { FormattedMessage } from 'react-intl';
import { GetTicketsContainer } from '../OneEvent/styled';
import { useNavigate } from 'react-router-dom';

const GetTickets: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`/getTickets/eventName`);
  };

  return (
    <GetTicketsContainer sx={{ maxWidth: '900px' }} onClick={handleClick}>
      <FormattedMessage id="app.oneevent.gettickets" />
      <img src="/icons_imgs/DownArrow.png" alt="Arrow Up" />
    </GetTicketsContainer>
  );
};

export default GetTickets;
