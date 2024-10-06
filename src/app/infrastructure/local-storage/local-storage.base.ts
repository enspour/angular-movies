import { Key, Pairs } from './local-storage.interfaces';

import { LS_DEFAULTS } from './local-storage.constants';

export class LocalStorageBase {
  public get<K extends Key>(key: K): Pairs[K] {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return LS_DEFAULTS[key];
  }

  public set<K extends Key>(key: K, value: Pairs[K]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove<K extends Key>(key: K) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
