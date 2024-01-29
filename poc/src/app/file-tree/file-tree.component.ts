import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FoodNode } from '../shared/types/foodnodes';
import { Store } from '@ngrx/store';
import { fileActions } from '../shared/store/actions';
import { TabsInterface } from '../shared/types/tabsInterface';
import { PeriodicElement } from '../shared/types/periodicElementInterface';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];
@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [MatTreeModule,MatIconModule,MatButtonModule],
  templateUrl: './file-tree.component.html',
  styleUrl: './file-tree.component.scss'
})

export class FileTreeComponent {
  files: any[] = [];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(private store:Store,) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  onFileChange(pFileList:any,nodeEdit:FoodNode){
    const files = pFileList.target.files;
    this.files = Object.keys(pFileList).map(key => pFileList[key]);
    nodeEdit.children?.push({name:"radish"});
    let TREE_DATA_COPY = TREE_DATA.map((node,index) => {
      if (node.name === nodeEdit.name) {
          // Change the age of the matched student
         TREE_DATA[index]=nodeEdit // Using spread syntax to create a new object with the updated age
      }
      return TREE_DATA; // Return unchanged objects for other students
  });
    this.dataSource.data = [];
    this.dataSource.data = TREE_DATA;
  }

  openFile(name:string){
    if(name=="Banana"){
      console.log("d")
    }
    else{
      const tabs:TabsInterface={label:"file1",content:{table:ELEMENT_DATA,sorting:null}};
      this.store.dispatch(fileActions.selectFile({tabs}));
    }
  }
}
