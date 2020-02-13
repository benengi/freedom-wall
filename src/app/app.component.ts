import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freedom-wall';
  user: User;
  isLoading = true;

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((user: User) => {
      this.user = user;
      this.isLoading = false;
    });
  }
}
