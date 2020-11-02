import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/service.index';

@Injectable({
  providedIn: 'root'
})
export class StudentsGuardService implements CanActivate {

  constructor(private ss:StudentService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let id = +route.params["id"];
    let student = this.ss.GetStudentsDetails(id);
    
    if (student) {
      return true;
    }
    alert("Invalid Student Id");
    this.router.navigate(["students"]);
    return false;
  }
}
