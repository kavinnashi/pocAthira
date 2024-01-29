import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectTabs } from '../shared/store/reducer';
import {MatTabsModule} from '@angular/material/tabs';
import {TablestructureComponent} from "../tablestructure/tablestructure.component";
import { CommonModule } from '@angular/common';
import { fileActions } from '../shared/store/actions';
@Component({
  selector: 'app-tabwrapper',
  standalone: true,
  imports: [MatTabsModule,TablestructureComponent,CommonModule],
  templateUrl: './tabwrapper.component.html',
  styleUrl: './tabwrapper.component.scss'
})
export class TabwrapperComponent {
  displayedColumns: string[]=[];
  constructor(private store:Store){}
  data$=combineLatest({
    tabs:this.store.select(selectTabs)
    
  })
  news(index:any){
    this.store.dispatch(fileActions.selectTab(index));

  }

}
