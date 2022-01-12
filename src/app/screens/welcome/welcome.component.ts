import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  inputData = "";
  listImg = [
    "https://baokhanhhoa.vn/dataimages/201909/original/images5377069_hoa.jpg",
    "https://top10tphcm.com/wp-content/uploads/2018/06/Top-loai-hoa-mau-tim-dep.jpg",
    "https://vnn-imgs-a1.vgcloud.vn/img.infonet.vn/w660/Uploaded/2020/iftqd/2017_11_12/y_nghia_hoa_dien_vy_1.jpg",
    "https://st.quantrimang.com/photos/image/2021/02/09/loai-hoa-tuong-trung-cho-tinh-ban-10.jpg"
  ];

  imgIndex = 0;

  constructor() { }

  ngOnInit(): void {
    let that = this;
    setInterval(function(){
      that.imgIndex++;
      if(that.imgIndex == that.listImg.length){
        that.imgIndex=0;
      }
    }, 2000)
  }

  resetIndex(){
    this.imgIndex = 0;
  }

}
