import { useLocation } from 'react-router-dom';

const SupportSection: React.FC = () => {
  const location = useLocation();

  const text = location.state.text;

  console.log('SupportSection: ', text);

  return (
    <div style={{ color: 'white' }}>
      <h1 style={{ color: 'white' }}>{text}</h1>
      <p>Toto je FAQ dané sekce</p>
    </div>
  );
};

export default SupportSection;
