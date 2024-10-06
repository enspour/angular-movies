import { Injectable } from '@angular/core';

import { LocalStorageObservable } from './local-storage.observable';

import { Key, Pairs } from './local-storage.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends LocalStorageObservable {
  public override subscribe<K extends Key>(key: K) {
    return super.subscribe(key);
  }

  public override set<K extends Key>(key: K, value: Pairs[K]) {
    super.set(key, value);
    super.notify(key);
  }

  public override remove<K extends Key>(key: K) {
    super.remove(key);
    super.notify(key);
  }

  public override clear() {
    super.clear();
    super.notifyAll();
  }

  public update<K extends Key>(key: K, fn: (current: Pairs[K]) => Pairs[K]) {
    this.set(key, fn(this.get(key)));
  }
}
