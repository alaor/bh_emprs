import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-employers',
  templateUrl: 'employers.component.html',
  styleUrls: ['employers.component.css'],
  providers: [FormBuilder],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class EmployersComponent implements OnInit {

  employerForm : FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    console.log('enviar...');
    console.log(this.employerForm.value);
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
