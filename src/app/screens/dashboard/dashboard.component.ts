import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
  
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
      this.totalMember = data.length;
    })
  }

  removeUser(id: number){
    this.userService.remove(id).subscribe(() => {
      this.userList = this.userList.filter(item => item.id != id);
      this.totalMember = this.userList.length;
    })
  }

}
