import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FoodNode } from '../shared/types/foodnodes';
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
  constructor() {
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
}
