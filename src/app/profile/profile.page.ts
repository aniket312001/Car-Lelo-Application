import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private userService : UserService, private route : Router) { }

  user :any
  ngOnInit() {
    this.userService.getUserById(localStorage.getItem('userId')).subscribe(data=>{
      console.log(data)
      this.user = data
    })
  }

  logout(){
    this.route.navigate(['/'])
    localStorage.clear()
  }

}
