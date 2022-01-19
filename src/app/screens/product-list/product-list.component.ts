import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  products = [
    {
      id: 1,
      name: "Iphone 13 pro max",
      price: 33000000,
      image: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/16/637673860105973451_iphone-13-pro-max-vang-1.jpg",
      star: 3.6
    },
    {
      id: 2,
      name: "Samsung Z-fold 3",
      price: 40000000,
      image: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643195814330368_samsung-galaxy-z-fold3-xanh-1.jpg",
      star: 3
    },
    {
      id: 3,
      name: "Samsung Z-Flip",
      price: 25000000,
      image: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/07/galaxy-z-flip-2-concept-1.png",
      star: 4.1
    },
  ]

  ngOnInit(): void {
  }

}
