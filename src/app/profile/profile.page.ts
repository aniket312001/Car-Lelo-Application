import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  filesSelected: FileList;

  constructor(
    private userService: UserService,private route: Router,public toastController: ToastController) {}

  user: any;
  ngOnInit() {
    this.getUserDetails()
  }

  getUserDetails(){
    this.userService.getUserById(localStorage.getItem('userId')).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }


  logout() {
    this.route.navigate(['/']);
    localStorage.clear();
  }

  showmodal = false;
  newImg:any
  openModal() {
    this.showmodal = true;
    this.newImg = this.user.imageUrl
  }

  closeModal() {
    this.showmodal = false;
    // this.getUserDetails()
  }

  encodeImageFileAsURL() {
    // img converter with  base64

    this.filesSelected = (<HTMLInputElement>(
      document.getElementById('inputFileToLoad')
    )).files;
    //  this.filesSelected = document.getElementById("inputFileToLoad").files;
    console.log(this.filesSelected);
    if (this.filesSelected.length > 0) {
      var fileToLoad = this.filesSelected[0];
      var fileReader = new FileReader();

      fileReader.onload = function (fileLoadedEvent) {
        console.log(fileLoadedEvent.target?.result); // <--- data: base64
        localStorage.setItem('img', String(fileLoadedEvent.target?.result));

      };

      fileReader.readAsDataURL(fileToLoad); // function call
    }

    setTimeout(() => {
      if(localStorage.getItem('img')) {
        this.newImg = localStorage.getItem('img');
      }
    }, 100);
  }

  updateImage() {
    console.log('img');
    this.user.imageUrl = localStorage.getItem('img');
    localStorage.removeItem('img');
    this.userService.updateUser(localStorage.getItem('userId'), this.user).subscribe((data) => {
        console.log(data);
        this.presentToast(data)
      });
  }

  async presentToast(data: any) {
    const toast = await this.toastController.create({
      color: 'primary',
      message: data,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
