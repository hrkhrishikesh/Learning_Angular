import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelseloops',
  imports: [],
  templateUrl: './ifelseloops.html',
  styleUrl: './ifelseloops.css'
})
export class Ifelseloops {
  display = true;
  hide(){
    this.display = !this.display;
  }

  color = 1;
  
  changeToRed() {
    this.color = 1;
  }
  
  changeToBlue() {
    this.color = 2;
  }
  
  changeToGreen() {
    this.color = 3;
  }
  
  changeToYellow() {
    this.color = 4;
  }

  handleInput(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
  }

  users = ['Hrishikesh', 'Coldplay', 'Eminem'];

}
