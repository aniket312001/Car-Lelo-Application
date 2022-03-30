import { CarService } from './../../service/car.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-car',
  templateUrl: './latest-car.component.html',
  styleUrls: ['./latest-car.component.scss'],
})
export class LatestCarComponent implements OnInit {

  constructor(private route:Router,private carService:CarService) { }
  latestData:any
  ngOnInit() {
    this.carService.getAllCar().subscribe(data=>{
      this.latestData = data
      console.log(data)
    })

  }



  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }
}
