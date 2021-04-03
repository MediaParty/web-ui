import {addMessages, getLocaleFromNavigator, init} from "svelte-i18n";
import en from './i18n/en.json';

export const i18nConfig = () => {
    addMessages('en', en);

    init({
        fallbackLocale: 'en',
        initialLocale: getLocaleFromNavigator()
    })
}
