// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: any;
  password: any;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).then((isAuthenticated: any) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        // Manejar el fallo de autenticación
        console.log('Error de autenticación');
      }
    });
  }
}
