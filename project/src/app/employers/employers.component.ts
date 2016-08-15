import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { EmployersService } from './employers.service';

@Component({
  moduleId: module.id,
  selector: 'app-employers',
  templateUrl: 'employers.component.html',
  styleUrls: ['employers.component.css'],
  providers: [FormBuilder, EmployersService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class EmployersComponent implements OnInit {

  employerForm : FormGroup;
  employers: any[] = [];

  constructor(private formBuilder: FormBuilder, private employersService: EmployersService) { }

  ngOnInit() {
    this.initForm();
    this.getEmployers();
  }

  getEmployers(){
    this.employersService.getData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.employers = myArray;
          console.log(this.employers);
        },
        error => console.log(error)
      );
  }

  onSubmit(){
    console.log('enviar...');
    console.log(this.employerForm.value);

    this.employersService.sendData(this.employerForm.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  private initForm() {
    this.employerForm = this.formBuilder.group({
      label: new FormControl(null),
      info : new FormControl(null),
      lat : new FormControl(null),
      lng : new FormControl(null)
    });
  }

}
