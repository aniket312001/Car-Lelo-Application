import { SocketioService } from './service/socketio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,HttpClientModule,FormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SocketioService
    ,LocationAccuracy
  ],
  bootstrap: [AppComponent],schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
