import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  projectId: string = "";
  projectForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    date_start: new FormControl(),
    team_size: new FormControl(null, [
      Validators.required, 
      Validators.min(0)
    ])
  });
  constructor(private activatedRoute: ActivatedRoute, 
              private route: Router,
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      this.projectId = urlParams['projectId'];
      this.projectService.getOne(this.projectId).subscribe(data => {
        this.projectForm.patchValue(data);
      })
    })
  }

  submitForm(){
    console.log(this.projectForm.value);
    this.projectService.saveEdit(this.projectForm.value, this.projectId).subscribe(response => {
      this.route.navigate(['/du-an']);
    });
  }

}
