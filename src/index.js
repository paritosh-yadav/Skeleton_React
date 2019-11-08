// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./auth0/react-auth0-spa";
import { IntlProvider } from "react-intl";
import config from "./auth0/auth_config.json";
import localeData from "./utils/locales/data.json";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/en'); // Add locale data for en
    require('@formatjs/intl-pluralrules/dist/locale-data/es'); // Add locale data for es
    require('@formatjs/intl-pluralrules/dist/locale-data/fr'); // Add locale data for fr
}

if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/dist/locale-data/en'); // Add locale data for en
    require('@formatjs/intl-relativetimeformat/dist/locale-data/es'); // Add locale data for es
    require('@formatjs/intl-relativetimeformat/dist/locale-data/fr'); // Add locale data for fr
}

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;
console.log("language", language);


// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en;

ReactDOM.render(
    <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <IntlProvider locale={language} messages={messages}>
            <App />
        </IntlProvider>
    </Auth0Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
