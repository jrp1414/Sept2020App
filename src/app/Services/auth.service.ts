import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../products/models/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    private baseUrl: string = "https://localhost:44319/";

    SignUp(user: any): Observable<any> {
        return this.http.post(this.baseUrl + "SignUp", user);
    } 
}