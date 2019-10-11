import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './login/loginuser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  public authURL = 'http://localhost:3000/login';
  public isAuthenticatedURL = 'http://localhost:3000/660/users';

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post(this.authURL,data);
  }

  setBearerToken(token) {
    localStorage.setItem('bearertoken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearertoken');
  }

  isUserAuthenticated(token): Observable<Array<LoginUser>> {
    return this.httpClient.get<Array<LoginUser>>( this.isAuthenticatedURL,
    {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }
      
    );
}
}
