import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    date_start: new FormControl(),
    team_size: new FormControl(null, [
      Validators.required, 
      Validators.min(0)
    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.projectForm.value);
  }
}