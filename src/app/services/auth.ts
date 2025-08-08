import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  public users: any = {
    admin: { password: '123', roles: ['ADMIN'] },
    estudiante: { password: '123', roles: ['ESTUDIANTE'] },
    profesor: { password: '123', roles: ['PROFESOR'] }
  }

  public username: any;
  public isAuthenticated: boolean = false;
  public roles: string[] = [];

  constructor(private router:Router) { }

  public login(username: string, password: string): boolean {
    if(this.users[username] && this.users[username].password === password) {
      this.username = username;
      this.isAuthenticated = true;
      this.roles = this.users[username].roles;
      return true;
    }
    return false;
  }

  logout(): void {
    this.username = null;
    this.isAuthenticated = false;
    this.roles = [];
    this.router.navigate(['login']);
  }
}
