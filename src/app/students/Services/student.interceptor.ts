import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StudentInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem("token");
        let header: HttpHeaders = new HttpHeaders({ "authorization": "Bearer " + token });
        const headers = req.headers
            .set('Content-Type', 'application/json')
            .set("authorization", "Bearer " + token );
        
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}