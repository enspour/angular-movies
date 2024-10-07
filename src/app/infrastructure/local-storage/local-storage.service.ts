import { Injectable } from '@angular/core';

import { LocalStorageObservable } from './local-storage.observable';

import { Key, Pairs } from './local-storage.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends LocalStorageObservable {
  public update<K extends Key>(key: K, fn: (current: Pairs[K]) => Pairs[K]) {
    this.set(key, fn(this.get(key)));
  }
}
