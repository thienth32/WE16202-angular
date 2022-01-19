import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rate: number = 0;
  
  constructor() {
    // this.starNumber = Array(this.rate).fill()
   }

  ngOnInit(): void {
  }

}
