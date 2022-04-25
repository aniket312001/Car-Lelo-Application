import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formValue !: FormGroup;

  constructor(private fb: FormBuilder,private service:UserService,private route: Router,public loadingController: LoadingController,public toastController: ToastController) {
    GoogleAuth.initialize()
  }

  async refresh(){
    let resp = GoogleAuth.refresh()
    console.log(resp)
  }

  async Oauth(){

    let response = await GoogleAuth.signIn();
    this.service.checklogin(response).subscribe(data=>{
      console.log(data)
      if(data.token){


        localStorage.setItem('token',data.token)

        localStorage.setItem('userId',data.user.id)
        localStorage.setItem('name',data.user.name)
        this.presentLoading()
        this.route.navigate(['./main-page'])
      } else {
        this.presentToast(data);
      }
    },error=>{this.presentToast(error.message + "  "+ error.name )})
  }



  ngOnInit() {
    this.formValue = this.fb.group({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    });
  }


  async presentToast(data:any) {
    const toast = await this.toastController.create({
      color: 'primary',
      message: data,
      duration: 2000,
      position:"top",
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  onSubmit(){
    console.log(this.formValue.value);
    // this.presentToast("hello");
    this.service.login(this.formValue.value).subscribe(data=>{
      console.log(data)
      // this.presentToast("hello 2");
      if(data.token){


        localStorage.setItem('token',data.token)

        this.service.userID = data.user.id // it will store userid in user Service

        localStorage.setItem('userId',data.user.id)
        localStorage.setItem('name',data.user.name)
        this.formValue.reset()
        this.presentLoading()
        this.route.navigate(['./main-page'])
      } else {
        this.presentToast(data);
      }
    },error=>{this.presentToast(error.message + "  "+ error.name + "  "+ error.status + "  "+ error.statusText )})
  }

}
