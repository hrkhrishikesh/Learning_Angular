import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() user:string='';
  @Input() city:string = '';


  //Sending to parent component
  @Output() getGames = new EventEmitter();
  games = ['Chess', 'Monopoly', 'Scrabble']


  ngOnInit(){
    this.getGames.emit(this.games);
  }

  // loaddata(){
  //   this.getGames.emit(this.games);
  // }


}
