import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  previewPhoto: boolean = false;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  contactPreference?: string;
  gender?: string;
  isActive?: string;
  department?: string;
  dateOfBirth?: Date = new Date(2022, 5, 27);
  photoPath?: string;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2022, 11, 31),
      });
  }

  ngOnInit(): void {
  }

  TogglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}