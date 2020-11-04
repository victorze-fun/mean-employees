import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeService.employees = res;
    });
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.putEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        this.getEmployees();
      });
    } else {
      this.employeeService.createEmployee(form.value).subscribe(res => {
        this.getEmployees();
        form.reset();
      });
    }
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(id).subscribe(res => {
        this.getEmployees();
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
