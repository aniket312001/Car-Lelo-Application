import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {
    if(localStorage.getItem('userId')){
      this.route.navigate(['/main-page'])
    }
  }

  value:string;
  onEnter(){
    console.log(this.value);
  }



}
