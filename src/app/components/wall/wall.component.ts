import { Component, OnInit } from '@angular/core';
import { WallService } from 'src/app/services/wall/wall.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  boards$: Observable<Board[]>;
  constructor(
    private wall: WallService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.boards$ = this.wall.getBoards();
  }

}
