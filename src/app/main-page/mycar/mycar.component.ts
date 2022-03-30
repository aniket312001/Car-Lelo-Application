import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-mycar',
  templateUrl: './mycar.component.html',
  styleUrls: ['./mycar.component.scss'],
})
export class MycarComponent implements OnInit {

  constructor(private route:Router,private carService:CarService) { }
  latestData:any
  ngOnInit() {
    this.carService.getCarByUserId().subscribe(data=>{
      this.latestData = data
      console.log(data)
    })

  }



  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }
}
