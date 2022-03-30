import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-upcomming-car',
  templateUrl: './upcomming-car.component.html',
  styleUrls: ['./upcomming-car.component.scss'],
})
export class UpcommingCarComponent implements OnInit {

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

    if(data.launched_year > new Date().getFullYear()){
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
