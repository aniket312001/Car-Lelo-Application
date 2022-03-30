import { MapService } from './../../service/map.service';
import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private carService: CarService, private r1: Router,private map: MapService) { }
  id:any
  car:any
  showChatBtn :any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.carService.getCarById(this.id).subscribe(data=>{
      console.log(data)
      this.car = data

      this.map.getmapdata(data.location).subscribe(data=>{ // longitude & latitude
        console.log(data.data[0].latitude)
        this.lat = data.data[0].latitude
        this.lng = data.data[0].longitude

        this.markers[0].lat = this.lat
        this.markers[0].lng = this.lng

      })


      this.showChatBtn = this.car.userId != localStorage.getItem('userId')
    })
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };



  clickme(id:any){
    console.log(id)
    this.r1.navigate([`main-page/chat/${id}`])
  }

  // google maps zoom level
  zoom: number = 10;

  // initial center position for the map
  lat!: number ;
  lng!: number;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers = [
      {
          lat : this.lat,
          lng : this.lng,
          label: "A",
      },
  ]


}
