import { Component, OnInit } from '@angular/core';
import {Inventor} from '../models/Inventor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WE16202 - angular';
  count = 0;

  inventors: Inventor[] = [];

  ngOnInit(): void {
    let that = this;
    setTimeout(() => {
      that.inventors = [
        {
          id: 1, first: "thienth", last: "tran", year: 1991, passed: 2090
        },
        {
          id: 2, first: "Albert", last: "Einstein", year: 1879, passed: 1955
        }
      ];
    }, 3000)
  }

  increaseCount(){
    this.count++;
  }
}
