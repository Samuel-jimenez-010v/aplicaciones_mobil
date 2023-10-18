// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: any, password: any): Promise<boolean> {
    // Aquí deberías realizar la lógica de autenticación, por ejemplo, una llamada a un servicio de autenticación
    // Simulamos una autenticación exitosa para este ejemplo
    if (username === 'admin' && password === '1234') {
      this.isAuthenticated = true;
      return Promise.resolve(true);
    } else {
      this.isAuthenticated = false;
      return Promise.resolve(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

