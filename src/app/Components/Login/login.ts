import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  imports: [FormsModule],
  styleUrl: 'login.css'
})
export class Login {

  username: string = '';

  constructor(private router: Router) {}

  login() {

    if (this.username.trim()) {

      localStorage.setItem('username', this.username);

      this.router.navigate(['/tasks']);
    }
  }
}