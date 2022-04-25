import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { CarService } from 'src/app/service/car.service';


@Component({
  selector: 'app-compare-car',
  templateUrl: './compare-car.component.html',
  styleUrls: ['./compare-car.component.scss'],
})
export class CompareCarComponent implements OnInit {

  carData:any
  value1:any
  value2:any
  showList1 = true
  showList2 = true
  firstCard:any
  secondCard:any


  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCar().subscribe(data=>{
      this.carData = data
      console.log(data)
    })
  }

  openCard1(id:any){
    console.log(id)
    this.showList1 = false
    this.carService.getCarById(id).subscribe(data=>{
      console.log(data)
      this.firstCard = data
    })
  }

  openCard2(id:any){
    this.showList2 = false
    this.carService.getCarById(id).subscribe(data=>{
      console.log(data)
      this.secondCard = data
    })
  }


  reset1(){
    this.showList1 = true

  }

  reset2(){
    this.showList2 = true

  }


}
