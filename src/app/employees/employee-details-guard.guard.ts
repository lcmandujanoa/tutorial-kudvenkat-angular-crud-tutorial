import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeDetailsGuardGuard implements CanActivate {

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
      map(employee => {
        const employeeExists = !!employee;

        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(['notfound']);
          return false;
        }
      }),
      catchError((err) => {
        console.error(err);
        return of(false);
      })
    )


  }

}
