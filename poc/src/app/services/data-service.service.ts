import { Injectable } from '@angular/core';
import {FoodNode} from "../types/foodnodes"
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private readonly subject = new Subject<any>;
  public _treedataObsevable :Observable<any>=this.subject.asObservable();
  set(node:FoodNode[]):void{

  }
  get():unknown{
  return null
  }
  constructor() {
   
   }
}
