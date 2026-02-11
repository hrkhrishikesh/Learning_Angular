import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  username : string|null = "";

  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    // this.username = this.route.snapshot.paramMap.get('name');
    // console.log(this.username);
    
    //this for the different way
    // this.route.queryParams.subscribe(params=>{
    //   this.username = (params['name']);
    // })

    this.route.data.subscribe(data=>{
    this.username = data['name']
    })
    
  }

  
}
