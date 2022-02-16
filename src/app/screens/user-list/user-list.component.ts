import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any> = []
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  removeUser(id: number){
    this.http.delete<any>(`http://localhost:3000/users/${id}`).subscribe(() => {
      this.users = this.users.filter(item => item.id != id);
    })
  }

}
