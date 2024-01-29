import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TabDataService {
  private readonly subject = new Subject<any>;
  public _treedataObsevable :Observable<any>=this.subject.asObservable();

  updateTabData(tabData:any):void{
    this.subject.next(tabData);
  }
 
  constructor() {
   
   }
}
