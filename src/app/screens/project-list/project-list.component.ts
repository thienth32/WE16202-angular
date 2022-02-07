import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      id: 1,
      code: "PRO01",
      name: "Dự án 1",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 2,
      code: "PRO02",
      name: "Dự án 2",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 3,
      code: "PRO03",
      name: "Dự án 3",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 4,
      code: "PRO04",
      name: "Dự án 4",
      members: Math.floor(Math.random() * 10),
    },
    {
      id: 5,
      code: "PRO05",
      name: "Dự án 5",
      members: Math.floor(Math.random() * 10),
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
