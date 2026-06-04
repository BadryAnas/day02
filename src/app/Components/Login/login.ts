import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: 'login.html',
  imports: [FormsModule],
  styleUrl: 'login.css'
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
        console.log('input username:', this.username);
        console.log('stored username:', storedUsername);
    
        console.log('input password:', this.password);
        console.log('stored password:', storedPassword);

    if (this.username === storedUsername && this.password === storedPassword) {
      this.router.navigate(['form'])   ;
    } else {
      alert('Invalid username or password');
    }
  }
}