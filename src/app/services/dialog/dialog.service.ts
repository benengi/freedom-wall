import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBoardPostComponent } from 'src/app/components/wall/new-board-post/new-board-post.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openNewBoardPostDlg() {
    const dialogRef = this.dialog.open(NewBoardPostComponent, {
      width: '250px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      return new Promise(result);
    });
  }
}
