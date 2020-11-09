import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../products/models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    private baseUrl: string = "http://localhost:44319/";

    isAuthenticated:boolean=false;

    SignUp(user: User): Observable<any> {
        return this.http.post(this.baseUrl+"SignUpUser",user);
    }
    
    SignIn(user: User): Observable<any> {
        return this.http.post(this.baseUrl+"SignIn",user);
    }
}