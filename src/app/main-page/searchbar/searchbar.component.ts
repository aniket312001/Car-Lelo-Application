import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  constructor(private route: Router) { }
  value:string

  ngOnInit() {}

  back(){
    this.route.navigate(['/main-page'])
  }

  onEnter(){
    console.log(this.value)
    this.route.navigate(['./main-page/search/'+this.value])
  }

}
