import { Component, OnInit, Input } from '@angular/core';
import { WallService } from 'src/app/services/wall/wall.service';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { NewBoardPostComponent } from '../new-board-post/new-board-post.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() boardId: string;

  board$: Observable<Board>;
  posts: Post[];

  constructor(
    private wallService: WallService,
    private dialog: MatDialog) {
      this.posts = [];
  }

  ngOnInit(): void {
    this.board$ = this.wallService.getBoard(this.boardId);
  }

  newPost() {
    const dialogRef = this.dialog.open(NewBoardPostComponent, {
      width: '500px',
      data: {name: '', animal: ''}
    });

    dialogRef.afterClosed().subscribe((result: Post) => {
      this.wallService.addPost(this.boardId, result);
    });
  }

}
