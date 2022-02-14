import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalProject = Math.floor(Math.random() * 101);
  totalMember = 0;
  completedTask = Math.floor(Math.random() * 1000);
  doingTask = Math.floor(Math.random() * 1000);
  userList: Array<any> = [];
  apiUrl = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.userList = data;
      this.totalMember = data.length;
    })
  }

  removeUser(id: number){
    this.http.delete<any>(`${this.apiUrl}/${id}`).subscribe(() => {
      this.userList = this.userList.filter(item => item.id != id);
      this.totalMember = this.userList.length;
    })
  }

}
