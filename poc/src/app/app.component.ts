import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FileTreeComponent } from './file-tree/file-tree.component';

import {TabwrapperComponent} from "./tabwrapper/tabwrapper.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FileTreeComponent
  ,TabwrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poc';
}
