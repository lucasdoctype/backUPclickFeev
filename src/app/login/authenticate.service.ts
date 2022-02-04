import { User } from './model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) {}

  authenticate(data :User) {
       this.http.post<User>('http://localhost:8080/user',data).subscribe();
  }

}
