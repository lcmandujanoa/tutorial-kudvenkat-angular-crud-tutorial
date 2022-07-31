import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, catchError } from "rxjs";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {

  private baseUrl: string = 'http://localhost:3000/employees';

  constructor(private _httpClient: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.message);
    } else {
      console.error('Server Side Error: ', errorResponse.message);
    }

    return throwError(() => new Error('There is a problem with the service. We are notified & working on it. Please try again later.'));
  }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this._httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

}