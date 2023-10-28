import { IntlProvider } from "react-intl";

import { defaultLocale, locales } from "./i18n-config";
interface Props {
    children: React.ReactNode;
}

const I18n: React.FC<Props> = (props) => {
    return (
        <IntlProvider locale={defaultLocale} messages={locales[defaultLocale]}>
    )
}

export default I18n