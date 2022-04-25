import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggest-car',
  templateUrl: './suggest-car.component.html',
  styleUrls: ['./suggest-car.component.scss'],
})
export class SuggestCarComponent implements OnInit {

  carData:any

  showmodal = false;
  showmodal2 = false;
  showmodal3 = false;
  showmodal4 = false;
  showmodal5 = false;

  suggestedCar:any


  // two way binding variable
  price:any = null
  seat:any = null
  fuel_type:any = null
  car_type:any = null
  location:any = null


  constructor(private carService: CarService, private route: Router) { }

  ngOnInit() {
    this.carService.getAllCar().subscribe(data=>{
      this.carData = data
      console.log(data)
    })
  }


  openModal() {
    this.showmodal = true;
  }
  openModal2() {
    this.showmodal2 = true;
  }
  openModal3() {
    this.showmodal3 = true;
  }
  openModal4() {
    this.showmodal4 = true;
  }
  openModal5() {
    this.showmodal5 = true;


  }


  confirm(data:any){

    if(data.location.toLowerCase().includes(this.location.toLowerCase()) && data.fuel_type.toLowerCase().includes(this.fuel_type.toLowerCase()) && data.car_type.toLowerCase().includes(this.car_type.toLowerCase()) && data.price<this.price && data.seating_capacity == this.seat  ){
      return true
    } else {
      return false
    }
  }

  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }


  closeModal() {
    this.showmodal = false;
  }
  closeModal2() {
    this.showmodal2 = false;
  }
  closeModal3() {
    this.showmodal3 = false;
  }
  closeModal4() {
    this.showmodal4 = false;
  }
  closeModal5() {
    this.showmodal5 = false;
  }

}
