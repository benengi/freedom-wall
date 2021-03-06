import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  @Input() user: User;
  constructor(public auth: AuthService) {
    if (!this.user) {
      this.auth.user$.subscribe(user => {
        this.user = user;
      });
    }
  }

  ngOnInit(): void {
  }

}
