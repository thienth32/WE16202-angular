import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectForm = new FormGroup({
    name: new FormControl(),
    date_start: new FormControl(),
    team_size: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
