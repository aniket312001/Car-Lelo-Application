import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-electric-car',
  templateUrl: './electric-car.component.html',
  styleUrls: ['./electric-car.component.scss'],
})
export class ElectricCarComponent implements OnInit {

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

    if(data.fuel_type.toLowerCase() == 'electric'){
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
