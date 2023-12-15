import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  districts:any=[
    {
      id:1,
      title:"Trivandrum",
      image:"https://assets-news.housing.com/news/wp-content/uploads/2022/09/07010326/Pathanamthitta-FEATURE-compressed.jpg"
  },
  {
      id:2,
      title:"Idukki",
      image:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/padmanabhaswamy-temple.jpg"
  
  
  },
  {
    id:3,
      title:"Pathnamthitta",
      image:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-e1534139417729.jpg"
  },
  {
      id:4,
      title:"Kottayam",
      image:"https://i.pinimg.com/originals/a7/2f/24/a72f240c1931fecb9d95e01aabeef7e7.jpg"  
    },
    {
      id:5,
      title:"Malappuram",
      image:"https://1.bp.blogspot.com/-k5Jwudy1cTg/U28wcYXk97I/AAAAAAAAAUU/nuDFjanBJFk/s1600/1557493_292477834254719_4567811305189455140_n.jpg" 
    }
  
  ];
  constructor(public route: ActivatedRoute){
  
  }
  
  ngOnInit(){
    this.getDetails();
  }
  
  id: any;
  data:any;
  
  getDetails(){
    this.id=this.route.snapshot.params["id"];
    this.data=this.districts.filter((d:any) => d.id == this.id)
  }


}
