import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss'],
})
export class UpdateCarComponent implements OnInit {
  formValue !: FormGroup;


  constructor(private fb:FormBuilder,private route: ActivatedRoute,private carService:CarService,public toastController: ToastController) {}

  id:any
  car:any

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)

    this.carService.getCarById(this.id).subscribe(data=>{
      console.log(data)
      this.car = data

      this.formValue = this.fb.group({
        name : new FormControl(data.name,[Validators.required]),
        model : new FormControl(data.model,[Validators.required]),
        price : new FormControl(data.price,[Validators.required]),
        mileage : new FormControl(data.mileage,[Validators.required]),
        engine : new FormControl(data.engine,[Validators.required]),
        seating_capacity : new FormControl(data.seating_capacity,[Validators.required]),
        fuel_type : new FormControl(data.fuel_type,[Validators.required]),
        car_type : new FormControl(data.car_type,[Validators.required]), // new or used
        location : new FormControl(data.location,[Validators.required]),
        launched_year : new FormControl(data.launched_year,[Validators.required]),
        year_used : new FormControl(data.year_used,[Validators.required]),
        registration_number : new FormControl(data.registration_number,[Validators.required])
      });
    })



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
    // this.carService.addCar(this.formValue.value).subscribe(data=>{
    //   console.log(data)
    //   this.presentToast(data)
    //   this.formValue.reset()
    // })

    this.carService.updateCar(this.id,this.formValue.value).subscribe(data=>{
      console.log(data)
      this.presentToast(data)
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
