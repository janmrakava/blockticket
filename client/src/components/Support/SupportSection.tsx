import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { type RootState } from '../../pages/store';
import { useEffect, useState } from 'react';

const SupportSection: React.FC = () => {
  const [dataSection, setDataSection] = useState();
  const location = useLocation();

  const text = location.state.text;

  console.log('SupportSection: ', text);

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  console.log(appLanguage);

  /**
   * TODO some fix with way, maybe use React Query on this?
   */

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`/supportSections/${text}.json`);
        const data = await response.json();
        console.log(data);
        setDataSection(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    void fetchData();
  }, []);

  console.log(dataSection);

  return (
    <div style={{ color: 'white' }}>
      <h1 style={{ color: 'white' }}>{text}</h1>
      <p>Toto je FAQ dané sekce</p>
    </div>
  );
};

export default SupportSection;
