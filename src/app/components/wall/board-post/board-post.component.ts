import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-post',
  templateUrl: './board-post.component.html',
  styleUrls: ['./board-post.component.scss']
})
export class BoardPostComponent implements OnInit {

  @Input() post: Post;

  public dragging: boolean;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  openPost() {
    if (this.dragging) {
      this.dragging = false;
      return;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
