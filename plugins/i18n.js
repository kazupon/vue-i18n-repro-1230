export default function ({ route, app, store }) {
  // onBeforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    console.log("i18n Plugin, onBeforeLanguageSwitch()");
  };
  // onLanguageSwitched called right after a new locale has been set
  // eslint-disable-next-line no-unused-vars
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log("i18n Plugin, onLanguageSwitched()");
  };
}
