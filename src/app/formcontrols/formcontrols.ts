import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrols',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './formcontrols.html',
  styleUrl: './formcontrols.css'
})
export class Formcontrols {
  // name = new FormControl();
  // password = new FormControl();

  // display(){
  //   console.log(this.name.value, this.password.value);
  // }

  //Reactive Form Grouping Controls

  profileForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.minLength(5), Validators.required]),
      email: new FormControl('',[Validators.email, Validators.required])
  })

  onSubmit(){
    console.log("OnSUbmit called");
    console.log(this.profileForm.value);
  }

  setValue(){
    this.profileForm.setValue({
      name:'Default Name',
      password:'Default Password',
      email:'Default Email'
    })
  }


  get name(){
    return this.profileForm.get('name');
  }

  get password(){
    return this.profileForm.get('password');
  }

  get email(){
    return this.profileForm.get('email');
  }

  //Template Driven Form
  
  userDetails:any;
  addDetails(value:NgForm){
    console.log(value);
    this.userDetails = value;
  }

}
