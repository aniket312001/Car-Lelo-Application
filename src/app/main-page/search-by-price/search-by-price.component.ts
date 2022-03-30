import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-search-by-price',
  templateUrl: './search-by-price.component.html',
  styleUrls: ['./search-by-price.component.scss'],
})
export class SearchByPriceComponent implements OnInit {

  constructor(private route:Router,private carService:CarService) { }

  latestData:any
  pricevalue:number =0

  ngOnInit() {


    console.log(this.pricevalue)

    this.carService.getAllCar().subscribe(data=>{
      data = data.sort((a:any, b:any) => b.price - a.price);

      this.latestData = data
      console.log(data)
    })

  }

  confirm(data:any){

    if(data.price < this.pricevalue* 100000){
      return true
    } else {
      return false
    }
  }

  clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }


 customFormatter(value: number) {
    return `${value}lakh`
  }



}
