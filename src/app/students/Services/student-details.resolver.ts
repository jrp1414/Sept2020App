import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { StudentService } from 'src/app/service.index';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsResolver implements Resolve<any> {

  constructor(private ss:StudentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = +route.params["id"];
    return this.ss.GetStudentsDetails(id);
  }
}
