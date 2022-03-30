import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private fb: FormBuilder,private service:UserService,private route: Router,public loadingController: LoadingController,public toastController: ToastController) { }

  formValue !: FormGroup;

  ngOnInit() {
    this.formValue = this.fb.group({
      username : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      address : new FormControl(null,[Validators.required]),
      phone : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
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

    this.service.register(this.formValue.value).subscribe(data=>{
      console.log(data)

      if(data.token){
        localStorage.setItem('token',data.token)

        this.service.userID = data.user.id // it will store userid in user Service

        localStorage.setItem('userId',data.user.id)
        localStorage.setItem('name',data.user.name)
        this.formValue.reset()
        this.route.navigate(['./main-page'])
        this.presentLoading()
      } else {
        this.presentToast(data)
      }
    })
  }

}
