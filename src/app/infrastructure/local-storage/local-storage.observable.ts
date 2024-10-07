import { Observable, Subscriber } from 'rxjs';

import { LocalStorageBase } from './local-storage.base';

import { Key, Pairs } from './local-storage.interfaces';

type PartialRecord<T extends string, V> = {
  [P in T]?: V;
};

export class LocalStorageObservable extends LocalStorageBase {
  private subscribers: PartialRecord<string, Subscriber<any>[]> = {};

  public subscribe<K extends Key>(key: K): Observable<Pairs[K]> {
    return new Observable((subscriber) => {
      subscriber.next(this.get(key));

      this.appendSubscriber(key, subscriber);

      return () => {
        this.removeSubscriber(key, subscriber);
      };
    });
  }

  public notifyAll() {
    const keys = Object.keys(this.subscribers) as Key[];

    for (const key of keys) {
      this.notify(key);
    }
  }

  public notify<K extends Key>(key: K) {
    const subscribers = this.subscribers[key] || [];

    for (const subscriber of subscribers) {
      subscriber.next(this.get(key));
    }
  }

  public override set<K extends Key>(key: K, value: Pairs[K]): void {
    super.set(key, value);
    this.notify(key);
  }

  public override remove<K extends Key>(key: K) {
    super.remove(key);
    this.notify(key);
  }

  public override clear() {
    super.clear();
    this.notifyAll();
  }

  private appendSubscriber<K extends Key>(key: K, subscriber: Subscriber<any>) {
    if (key in this.subscribers) {
      this.subscribers[key]!.push(subscriber);
    } else {
      this.subscribers[key] = [subscriber];
    }
  }

  private removeSubscriber<K extends Key>(key: K, subscriber: Subscriber<any>) {
    if (key in this.subscribers) {
      this.subscribers[key] = this.subscribers[key]!.filter(
        (s) => s !== subscriber,
      );
    }
  }
}
