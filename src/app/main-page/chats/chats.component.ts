import { ChatsService } from './../../service/chats.service';
import { UserService } from './../../service/user.service';
import { SocketioService } from './../../service/socketio.service';
import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {

  constructor(private socketService : SocketioService,private userService : UserService,private chatService: ChatsService ,private r1: Router) { }

  value:""
  user:any

  ngOnInit() {
    console.log("weuhgweughuiwghiwg")
    // this.socketService.setupSocketConnection()
    this.chatService.getChatList(localStorage.getItem('userId')).subscribe(data=>{
      data = data.sort((a:any, b:any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      console.log(data)
      this.user = data
    })
  }

  ionViewWillEnter(){
    console.log("ppp")
    this.ngOnInit()
  }



  doRefresh(event:any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ngOnInit()
      event.target.complete();
    }, 2000);
  }


  onEnter(){
    // console.log(this.value)
    // this.socketService.sendMessage(this.value)
  }


  clickme(id:any){
    console.log(id)
    this.r1.navigate([`main-page/chat/${id}`])
  }
}
