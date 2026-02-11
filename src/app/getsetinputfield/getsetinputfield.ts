import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetinputfield',
  imports: [],
  templateUrl: './getsetinputfield.html',
  styleUrl: './getsetinputfield.css'
})
export class Getsetinputfield {
  name:String = '';
  email:String = '';
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value;
  }

  displayName:String = '';

  showName(){
    this.displayName = this.name;
  }

  getEmail(value:String){
    console.log(value);
    this.email = value;
  }
}
