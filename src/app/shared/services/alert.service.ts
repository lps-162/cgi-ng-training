import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AlertService {

  alertSource = new Subject<string>();
   alertObservable: Observable<string>;

  constructor() { 
    this.alertObservable = this.alertSource.asObservable();
  }

  sendMessage(message: string) {
    this.alertSource.next(message);
  }

  getMessage() {
    return this.alertObservable;
  }

}
