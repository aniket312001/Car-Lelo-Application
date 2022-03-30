import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  formValue !: FormGroup;


  constructor(private fb:FormBuilder,private carService:CarService,public toastController: ToastController) { }


  ngOnInit() {

    this.formValue = this.fb.group({
      name : new FormControl('',[Validators.required]),
      model : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      mileage : new FormControl('',[Validators.required]),
      engine : new FormControl('',[Validators.required]),
      seating_capacity : new FormControl(null,[Validators.required]),
      fuel_type : new FormControl('',[Validators.required]),
      car_type : new FormControl('',[Validators.required]), // new or used
      location : new FormControl('',[Validators.required]),
      launched_year : new FormControl(null,[Validators.required]),
      year_used : new FormControl(0,[Validators.required]),
      registration_number : new FormControl('',[Validators.required])
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

  onSubmit(){
    console.log(this.formValue.value)
    this.carService.addCar(this.formValue.value).subscribe(data=>{
      console.log(data)
      this.presentToast(data)
      this.formValue.reset()
    })
  }

  filesSelected1:any
  filesSelected2:any
  filesSelected3:any




  change1(name){
    this.filesSelected1 = (<HTMLInputElement>document.getElementById("inputFileToLoad1")).files;
    this.encodeImageFileAsURL(this.filesSelected1,name)
  }

  change2(name){
    this.filesSelected2 = (<HTMLInputElement>document.getElementById("inputFileToLoad2")).files;
    this.encodeImageFileAsURL(this.filesSelected2,name)
  }

  change3(name){
    this.filesSelected3 = (<HTMLInputElement>document.getElementById("inputFileToLoad3")).files;
    this.encodeImageFileAsURL(this.filesSelected3,name)
  }



  encodeImageFileAsURL(filesSelected,data){   // img converter with  base64

    // this.filesSelected = (<HTMLInputElement>document.getElementById("inputFileToLoad")).files;
   //  this.filesSelected = document.getElementById("inputFileToLoad").files;
   console.log(filesSelected)
   if (filesSelected.length > 0) {

       var fileToLoad = filesSelected[0];
       var fileReader = new FileReader();

       fileReader.onload = function(fileLoadedEvent) {

         console.log(fileLoadedEvent.target?.result)   // <--- data: base64
         localStorage.setItem(data,String(fileLoadedEvent.target?.result) )
       }

       fileReader.readAsDataURL(fileToLoad);  // function call
   }

 }


}
