import { Component } from '@angular/core';
import {Child} from './child/child'

@Component({
  selector: 'app-parentchild',
  imports: [Child],
  templateUrl: './parentchild.html',
  styleUrl: './parentchild.css'
})
export class Parentchild {
  userName = "Heyya"
  games : undefined|string[];
  onChange(user:string){
    this.userName = user;
  }

  users = ['Alice', 'Bob']

  handleGames(games:string[]){
    console.log(games);
    this.games = games;
  }

  


}
