import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallRoutingModule } from './wall-routing.module';
import { WallComponent } from './wall.component';
import { BoardComponent } from './board/board.component';
import { BoardPostComponent } from './board-post/board-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [WallComponent, BoardComponent, BoardPostComponent],
  imports: [
    CommonModule,
    WallRoutingModule,
    SharedModule,
    DragDropModule,
    MatDialogModule
  ]
})
export class WallModule { }