import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { NewBoardPostComponent } from '../new-board-post/new-board-post.component';
import { WallService } from 'src/app/services/wall/wall.service';

@Component({
  selector: 'app-board-post',
  templateUrl: './board-post.component.html',
  styleUrls: ['./board-post.component.scss']
})
export class BoardPostComponent implements OnInit {

  @Input() post: Post;
  @Input() board: Board;
  @Input() idx: number;

  public dragging: boolean;
  constructor(
    private wall: WallService,
    public dialog: MatDialog) { }

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

    const dialogRef = this.dialog.open(NewBoardPostComponent, {
      width: '300px',
      data: {
        title: this.post.title,
        author: this.post.author,
        contents: this.post.contents,
        boardId: this.post.boardId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.board.posts[this.idx] = result;
        this.wall.updatePosts(this.board.id, this.board.posts);
      }
    });
  }
}
