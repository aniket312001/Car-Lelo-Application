import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router,private platform: Platform,
    private routerOutlet: IonRouterOutlet) {
    if(localStorage.getItem('userId')){
      this.route.navigate(['/main-page'])
    }

    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  value:string;
  onEnter(){
    console.log(this.value);
  }



}
