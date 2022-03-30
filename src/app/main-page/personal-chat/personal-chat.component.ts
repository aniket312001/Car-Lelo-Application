import { ChatsService } from './../../service/chats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SocketioService } from 'src/app/service/socketio.service';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.scss'],
})
export class PersonalChatComponent implements AfterViewInit,OnDestroy {
  @ViewChild('target') myDiv: ElementRef;

  constructor(private socketService : SocketioService, private userService: UserService,private route :ActivatedRoute, private chatService:ChatsService, private r1: Router) { }

  value:""
  userData:any
  val :any
  myId = localStorage.getItem('userId');
  showChats= false

  ngAfterViewInit() {


    this.val = localStorage.getItem('userId') + this.route.snapshot.paramMap.get('id')
    this.socketService.setupSocketConnection(this.val.split('').sort().join(''))

    console.log(this.userService.userID)
    console.log(this.route.snapshot.paramMap.get('id'))
    // console.log()

    this.userService.getUserById(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
      this.userData = data
    })


    this.getAllChats()

    // when message will come it will run
    this.socketService.socket.on('show', (msg:any) => {
      console.log('message: ' + msg);
       this.getAllChats()
    });

  }


  getAllChats(){
    // get all chats
    this.chatService.getChatsByRoomId(this.val.split('').sort().join('')).subscribe(data=>{
      console.log(data)
      this.data = data

      setTimeout(() => {  // scroll down
        this.scrollToElement()
        this.showChats = true
      }, 10);

    })
  }

  data:any = []

  ngOnDestroy() {
    console.log("destroy run")
    this.socketService.socket.disconnect();

  }



  clickme(){
    this.r1.navigate([`/main-page/chat/`])
  }



  mychatData:any = {}


  onEnter(){
    // console.log(this.value)
    this.data.push(this.value)
    this.socketService.sendMessage(this.value)


    this.mychatData.roomId =this.val.split('').sort().join('')
    this.mychatData.senderId = localStorage.getItem('userId')
    this.mychatData.receiverId = this.route.snapshot.paramMap.get('id')
    this.mychatData.msg = this.value

    this.chatService.addChatByRoomId(this.mychatData).subscribe(data=>{
      console.log(data)

      // this.data.push(this.mychatData)
      this.getAllChats()
      this.value = ""
    })


    // add to chatlist
    let lst:any = {}
    lst.myId =  localStorage.getItem('userId');
    lst.userId =  this.userData._id;
    lst.username =  this.userData.username;

    this.chatService.addChatList(lst).subscribe(data=>{
      console.log(data)
    })


    // For opposite user
    let lst2:any = {}
    lst2.myId =  this.userData._id;
    lst2.userId =  localStorage.getItem('userId')
    lst2.username =  localStorage.getItem('name')

    this.chatService.addChatList(lst2).subscribe(data=>{
      console.log(data)
    })

  }

  async scrollToElement() {
    console.log("egiheguihegoi run")
    console.log(this.myDiv.nativeElement)
    await this.myDiv.nativeElement.scrollIntoView({ block: "end",});
  }


}
