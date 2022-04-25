import { UpdateCarComponent } from './update-car/update-car.component';
import { AnotherUserProfileComponent } from './another-user-profile/another-user-profile.component';
import { PaymentGateWayComponent } from './payment-gate-way/payment-gate-way.component';
import { TermAndConditionsComponent } from './term-and-conditions/term-and-conditions.component';
import { CareerComponent } from './career/career.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SearchByPriceComponent } from './search-by-price/search-by-price.component';
import { MycarComponent } from './mycar/mycar.component';
import { PersonalChatComponent } from './personal-chat/personal-chat.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { OldCarComponent } from './old-car/old-car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { UsedCarComponent } from './used-car/used-car.component';
import { UpcommingCarComponent } from './upcomming-car/upcomming-car.component';
import { PopularCarComponent } from './popular-car/popular-car.component';
import { ElectricCarComponent } from './electric-car/electric-car.component';
import { LatestCarComponent } from './latest-car/latest-car.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SuggestCarComponent } from './suggest-car/suggest-car.component';
import { AboutComponent } from './about/about.component';
import { CarComponent } from './car/car.component';
import { SellComponent } from './sell/sell.component';
import { ChatsComponent } from './chats/chats.component';
import { CompareCarComponent } from './compare-car/compare-car.component';

import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPagePage } from './main-page.page';
import { SearchByMapComponent } from './search-by-map/search-by-map.component';

const routes: Routes = [
  {
    path: '',component: MainPagePage, children:[

      {path:'car',component:CarComponent},
      {path:'car/:id',component:CarDetailComponent},
      {path:'mycar',component:MycarComponent},

      {path:'home',component:HomeScreenComponent},
      {path:'emi',component:EmiCalculatorComponent},
      {path:'compare',component:CompareCarComponent},
      {path:'sell',component:SellComponent},
      {path:'update/:id',component:UpdateCarComponent},
      {path:'search/:name',component:SearchCarComponent},
      {path:'searchbyprice',component:SearchByPriceComponent},
      {path:'searchbymap',component:SearchByMapComponent},

      {path:'chat',component:ChatsComponent},

      {path:'about',component:AboutComponent},
      {path:'suggest',component:SuggestCarComponent},
      {path:'latest',component:LatestCarComponent},
      {path:'electric',component:ElectricCarComponent},
      {path:'popular',component:PopularCarComponent},
      {path:'upcomming',component:UpcommingCarComponent},
      {path:'used',component:UsedCarComponent},
      {path:'old',component:OldCarComponent},

      {path:'privacy',component:PrivacyPolicyComponent},
      {path:'career',component:CareerComponent},
      {path:'contact',component:ContactUsComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'term_and_condition',component:TermAndConditionsComponent},

      {path:'supportUs',component:PaymentGateWayComponent},

      {path:'',redirectTo:'car',pathMatch:'full'}
    ]
  },
  {path:'chat/:id',component:PersonalChatComponent},
  {path:'profile/:id',component:AnotherUserProfileComponent},
  {path:'search',component:SearchbarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPagePageRoutingModule {}
