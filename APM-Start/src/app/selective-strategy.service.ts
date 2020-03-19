import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectiveStrategyService implements PreloadingStrategy {

  preload(route: Route, load: Function) {
    if (route.data && route.data['preload']) {
      return load();
    }
    return of (null);
  }

  constructor() { }
}
