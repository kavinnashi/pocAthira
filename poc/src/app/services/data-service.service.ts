import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { fileActions } from '../shared/store/actions';
@Injectable({
  providedIn: 'root'
})
export class TabDataService {
  private readonly subject = new Subject<any>;
  public _tabdataObsevable :Observable<any>=this.subject.asObservable();

  updateTabData(tabData:any):void{
     
    this.subject.next([tabData]);

  }
 
  constructor() {
   
   }
}
