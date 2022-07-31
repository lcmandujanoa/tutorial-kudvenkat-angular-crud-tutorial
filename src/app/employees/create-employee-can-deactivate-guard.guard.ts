import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";

@Injectable()
export class CreateEmployeeCanDeactivateGuard implements CanDeactivate<CreateEmployeeComponent> {

  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('R u sure u want to discard your changes?');
    }

    return true;
  }

}