import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() boards: Board[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPost() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
