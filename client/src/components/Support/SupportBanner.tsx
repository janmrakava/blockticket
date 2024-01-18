/* eslint-disable react/prop-types */
import { FormattedMessage } from 'react-intl';
import {
  SupportBannerBox,
  SupportBannerHeading,
  SupportBannerText
} from '../../styles/supportStyles';

interface ISupportBanner {
  text: string;
}

const SupportBanner: React.FC<ISupportBanner> = ({ text }) => {
  return (
    <SupportBannerBox>
      <img src={`/support-img/${text}.jpg`} alt={`${text}`} style={{ marginTop: 20, width: 60 }} />
      <SupportBannerHeading>
        <FormattedMessage id={`app.support.${text}.heading`} />
      </SupportBannerHeading>
      <SupportBannerText>
        <FormattedMessage id={`app.support.${text}.text`} />
      </SupportBannerText>
    </SupportBannerBox>
  );
};

export default SupportBanner;
