import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-old-car',
  templateUrl: './old-car.component.html',
  styleUrls: ['./old-car.component.scss'],
})
export class OldCarComponent implements OnInit {

  constructor(private route:Router,private carService:CarService) { }

  latestData:any
  ngOnInit() {

    console.log(new Date().getFullYear())

    this.carService.getAllCar().subscribe(data=>{
      this.latestData = data
      console.log(data)
    })

  }

  confirm(data:any){

    if(data.car_type == 'used' && data.year_used > 5){
      return true
    } else {
      return false
    }
  }

  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }
}
