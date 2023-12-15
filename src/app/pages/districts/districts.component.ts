import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  
  districts:any=[
    
  {
        id:1,
        title:"Trivandrum",
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/05/padmanabhaswamy-temple.jpg",
        description:"Thiruvananthapuram  (commonly shortened to TVM) formerly known as Trivandrum is the capital of the Indian state of Kerala."
    

    },
    {
      id:2,
        title:"Idukki",
        image:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-e1534139417729.jpg",
        description:"Idukki is one of the 14 districts of Kerala state, India, created on 26 January 1972. This beautiful High range district of."
    },
  {
        id:3,
        title:"Pathanamthitta",
        image:"https://i.pinimg.com/originals/a7/2f/24/a72f240c1931fecb9d95e01aabeef7e7.jpg", 
        description:"The district headquarters is at Pathanamthitta town. The district administration is headed by the District Collector. The "
      },
      {
        id:4,
        title:"Kottayam",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Malarikkal5_%281%29.jpg/640px-Malarikkal5_%281%29.jpg",
        description:"Kottayam is a city in the Indian state of Kerala.It is located in central Kerala and is also the administrative capital of Kottayam "
      },
      {
        id:5,
        title:"Malappuram",
        image:"https://1.bp.blogspot.com/-k5Jwudy1cTg/U28wcYXk97I/AAAAAAAAAUU/nuDFjanBJFk/s1600/1557493_292477834254719_4567811305189455140_n.jpg",
        description:"Bounded by the Nilgiris hills on the east and the Arabian Sea on the west, the district of Malappuram literally the land atop the hills, "
      }

  ]


}
