import { SearchByMapComponent } from './search-by-map/search-by-map.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { SearchByPriceComponent } from './search-by-price/search-by-price.component';
import { MycarComponent } from './mycar/mycar.component';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { UsedCarComponent } from './used-car/used-car.component';
import { UpcommingCarComponent } from './upcomming-car/upcomming-car.component';
import { SuggestCarComponent } from './suggest-car/suggest-car.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PopularCarComponent } from './popular-car/popular-car.component';
import { OldCarComponent } from './old-car/old-car.component';
import { LatestCarComponent } from './latest-car/latest-car.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FindCarNavbarComponent } from './find-car-navbar/find-car-navbar.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { ElectricCarComponent } from './electric-car/electric-car.component';
import { CompareCarComponent } from './compare-car/compare-car.component';
import { ChatsComponent } from './chats/chats.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarComponent } from './car/car.component';

import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';
import { SellComponent } from './sell/sell.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MainPagePageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfAj2b7ZhU8BMujlnDodqHj_cyARd520c',
      libraries: ['places']
    })
  ],
  declarations: [MainPagePage,SellComponent,CarComponent,CarDetailComponent,ChatsComponent,CompareCarComponent,ElectricCarComponent,EmiCalculatorComponent,FindCarNavbarComponent,HomeScreenComponent,LatestCarComponent,OldCarComponent,PopularCarComponent,SearchbarComponent,SuggestCarComponent,UpcommingCarComponent,UsedCarComponent,SearchCarComponent,PersonalChatComponent,MycarComponent,SearchByPriceComponent,AboutComponent,CareerComponent,PrivacyPolicyComponent,ContactUsComponent,FeedbackComponent,TermAndConditionsComponent,SearchByMapComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class MainPagePageModule {}
