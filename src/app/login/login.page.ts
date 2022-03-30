import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formValue !: FormGroup;

  constructor(private fb: FormBuilder,private service:UserService,private route: Router,public loadingController: LoadingController,public toastController: ToastController) { }

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

    this.service.login(this.formValue.value).subscribe(data=>{
      console.log(data)

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
    })
  }

}
