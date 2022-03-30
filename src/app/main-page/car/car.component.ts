import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  latest_Car:any
  carBrand : any
  FAQData :any
  constructor( private carService: CarService, private route:Router) { }

  ngOnInit() {

    this.carService.getBrandName().subscribe(data=>{
      console.log(data)
      this.carBrand = data
    })

    this.carService.getFAQ().subscribe(data=>{
      console.log(data)
      this.FAQData = data
    })

    console.log("srhgiwrnh")

    this.carService.getAllCar().subscribe(data=>{
      console.log(data)


      if(data == 'Authentication invalid'){
        this.route.navigate(['/'])
      } else{
        this.latest_Car = data
      }

    })



  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    // slidesPerView: 1.5,
    // spaceBetween: 10

  };

  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }

  searchme(data:any){
    this.route.navigate([`main-page/search/${data}`])
  }

}
