import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public images:any[]=[
   {
   path:'assets/slider1.jpg'
   
 },
 {
  path:'assets/slider2.jpg'
},
{
  path:'assets/slider3.jpg'
},
{
  path:'assets/slider4.jpg'
},
{
  path:'assets/slider5.jpg'
},
{
  path:'assets/slider6.jpg'
},
{
  path:'assets/slider7.jpg'
},
{
  path:'assets/slider8.jpg'
},
{
  path:'assets/slider9.jpg'
},
{
  path:'assets/slider10.jpg'
},
];
  
  constructor() { }

  ngOnInit(): void {
  }

}
