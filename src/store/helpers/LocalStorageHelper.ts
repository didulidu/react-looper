import { parseJson } from "../../utils/jsonHelpers";

class LocalStorageHelper {
  static set<T>(key: string | string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static get<T>(key: string | string): T | null {
    const dataString = window.localStorage.getItem(key);
    if (dataString) {
      return parseJson(dataString);
    }
    return null;
  }

  static remove(key: string | string): void {
    window.localStorage.removeItem(key);
  }
}

export default LocalStorageHelper;
