import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forloopcontextualvar',
  imports: [FormsModule],
  templateUrl: './forloopcontextualvar.html',
  styleUrl: './forloopcontextualvar.css'
})
export class Forloopcontextualvar {

  users = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Ethan',
    'Fiona',
    'George',
    'Hannah',
    'Ivan',
    'Julia'
  ]
  display = false;
  toggle(){
    this.display = !this.display;
  }

  name = "";
  name2 = "";
  changeName(event:Event){
    const val = (event.target as HTMLInputElement).value;
    this.name2 = val;
  }

}
