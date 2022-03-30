import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import { MapService } from 'src/app/service/map.service';

@Component({
  selector: 'app-search-by-map',
  templateUrl: './search-by-map.component.html',
  styleUrls: ['./search-by-map.component.scss'],
})
export class SearchByMapComponent implements OnInit {

  constructor(private route:Router,private carService:CarService,private map: MapService) { }
  allData = []

async ngOnInit() {

    this.carService.getAllCar().subscribe(data=>{
      console.log(data)
      data.forEach( element => {
          // console.log(element.name)

           this.map.getmapdata(element.location).subscribe(data =>{
          this.lat = data.data[0].latitude
          this.lng = data.data[0].longitude
          let temp = {name: element.name, id: element._id, price: element.price , img: element.img1, location: element.location, lat: data.data[0].latitude, lng: data.data[0].longitude}
          this.allData.push(temp)
        })
        // console.log(this.allData)
      });

    })

  }
   // google maps zoom level
   zoom: number = 5;

   // initial center position for the map
   lat: number  = 20.5937;
   lng: number = 78.9629;

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

   clickme(id:any){
    console.log(id)
    this.route.navigate([`main-page/car/${id}`])
  }

}
