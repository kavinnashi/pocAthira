import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fileActions } from '../shared/store/actions';
import { TabsInterface } from '../shared/types/tabsInterface';
import { selectIndex, selectTabs } from '../shared/store/reducer';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss'
})
export class SortComponent {
constructor(private store:Store){}
 data$=combineLatest({
tabs:this.store.select(selectTabs),
index:this.store.select(selectIndex)});

  editItem(index: number): void {

  }
}
