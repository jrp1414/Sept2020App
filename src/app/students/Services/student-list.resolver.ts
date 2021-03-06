import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { StudentService } from './student.service';


@Injectable({
  providedIn: 'root'
})
export class StudentListResolver implements Resolve<any> {

  constructor(private ss:StudentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.ss.GetStudentsList();
  }
}
