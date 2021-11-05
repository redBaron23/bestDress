import { NativeModules, Platform } from "react-native";
import { dictionaries } from "../utils/dictionaries";

const deviceLocale = "es_US";

class Translator {
    private language: string;

    public translate(key) {
        return this.translateToLanguage(key, this.getDeviceLanguage());
    }

    private translateToLanguage(key, language) {
        try {
            return dictionaries[language][key];
        } catch (e) {
            console.warn(e);
            return key;
        }
    }

    private getDeviceLanguage() {
        let currentLocale;
        try {
            if (Platform.OS === "android") {
                currentLocale = NativeModules.I18nManager.localeIdentifier;
            } else {
                currentLocale = NativeModules.SettingsManager.settings.AppleLocale;
            }
        } catch (error) {
            currentLocale = deviceLocale;
        }
        currentLocale = currentLocale ? currentLocale : deviceLocale;
        return currentLocale.split("_")[0];
    }
}

export default new Translator();