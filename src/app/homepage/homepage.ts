import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  
  constructor(private router: Router){}

  gotoprofile(){
    //this.router.navigate(['profile'], {queryParams:{name:'HRK'}});
    
  }
}
