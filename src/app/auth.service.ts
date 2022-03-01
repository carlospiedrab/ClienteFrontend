import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baserUrl: string = 'https://localhost:44324/api/Users/';

  constructor(private http: HttpClient,
              private router: Router) { }

  register(user: UserInterface){
      return this.http.post(this.baserUrl+'Register', user);
  }

  login(user: UserInterface){
      return this.http.post(this.baserUrl+'Login', user);
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
    this.router.navigate(['/clientes']);
    window.location.reload();
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }

}
