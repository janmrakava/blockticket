import { useSelector } from 'react-redux';
import { type RootState } from '../../pages/store';
import FAQQuestion from './FAQQuestion';
import FAQAnswer from './FAQAnswer';
import { FormattedMessage } from 'react-intl';

import './faq.css';

/* eslint-disable react/prop-types */
interface FAQItem {
  question: Record<string, string>;
  answer: Record<string, string>;
}

export interface FAQData {
  faq: FAQItem[];
}

interface IFAQProps {
  data: FAQData | undefined;
  section: string;
}
const FAQ: React.FC<IFAQProps> = ({ data, section }) => {
  if (data == null) {
    return <div>Loading...</div>;
  }

  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const faqItems = data.faq.map((item) => {
    const question = item.question[appLanguage];
    const answer = item.answer[appLanguage];

    return (
      <div key={question}>
        <FAQQuestion text={question} />
        <FAQAnswer text={answer} />
      </div>
    );
  });
  return (
    <div className="faq-container">
      <h1>
        <FormattedMessage id={`app.support.${section}.heading`} />
      </h1>
      {faqItems}
    </div>
  );
};

export default FAQ;
