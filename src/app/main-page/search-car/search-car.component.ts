import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss'],
})
export class SearchCarComponent implements OnInit {

  constructor(private route:Router,private carService:CarService, private r1:ActivatedRoute) { }

  latestData:any
  name:any

  ngOnInit() {

    this.name = this.r1.snapshot.paramMap.get('name');

    this.carService.getAllCar().subscribe(data=>{
      this.latestData = data
      console.log(data)
    })

  }

  confirm(data:any){

    if(data.name.toLowerCase().includes(this.name.toLowerCase()) || data.fuel_type.toLowerCase().includes(this.name.toLowerCase()) || data.location.toLowerCase().includes(this.name.toLowerCase()) || data.model.toLowerCase().includes(this.name.toLowerCase()) || data.car_type.toLowerCase().includes(this.name.toLowerCase())){
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
