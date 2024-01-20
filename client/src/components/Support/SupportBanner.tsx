/* eslint-disable react/prop-types */
import { FormattedMessage } from 'react-intl';
import {
  SupportBannerGrid,
  SupportBannerHeading,
  SupportBannerText
} from '../../styles/supportStyles';

interface ISupportBanner {
  text: string;
}

const SupportBanner: React.FC<ISupportBanner> = ({ text }) => {
  return (
    <SupportBannerGrid item xs={8} md={5} lg={3}>
      <img src={`/support-img/${text}.jpg`} alt={`${text}`} style={{ marginTop: 20, width: 60 }} />
      <SupportBannerHeading>
        <FormattedMessage id={`app.support.${text}.heading`} />
      </SupportBannerHeading>
      <SupportBannerText>
        <FormattedMessage id={`app.support.${text}.text`} />
      </SupportBannerText>
    </SupportBannerGrid>
  );
};

export default SupportBanner;
