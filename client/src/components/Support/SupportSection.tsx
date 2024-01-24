import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FAQ, { type FAQData } from './FAQ';

const SupportSection: React.FC = () => {
  const [dataSection, setDataSection] = useState<FAQData>();
  const location = useLocation();

  const text = location.state.text;

  console.log('SupportSection: ', text);

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
      {dataSection != null ? <FAQ data={dataSection} section={text} /> : null}
    </div>
  );
};

export default SupportSection;
