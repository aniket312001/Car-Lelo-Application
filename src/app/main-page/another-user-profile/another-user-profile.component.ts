import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-user-profile',
  templateUrl: './another-user-profile.component.html',
  styleUrls: ['./another-user-profile.component.scss'],
})
export class AnotherUserProfileComponent implements OnInit {

  constructor(private userService:UserService,private route: ActivatedRoute) { }

  id:any
  user:any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.userService.getUserById(this.id).subscribe(data=>{
      this.user = data
    })
  }

}
