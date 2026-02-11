import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-basics',
  imports: [],
  templateUrl: './signal-basics.html',
  styleUrl: './signal-basics.css'
})
export class SignalBasics {
  count = signal(10);

  constructor(private http: HttpClient){
    effect(()=>{
      console.log(this.count());
    })

    effect(()=>{
      console.log(this.userName());
    })

  }

  updateValue(){
    this.count.set(this.count() + 10);
  }

  x = signal(10);
  y = signal(20);
  z = computed(()=>this.x() + this.y());

  showValue(){
    console.log(this.z());
    this.x.set(this.x() + 10);
    console.log(this.z());
  }


  userName = signal("HRK");

  sendPostRequest(){
    const url = '/api/request';

    this.http.get(url, {}).subscribe({
      next: (response) => {
        console.log('POST success:', response);
      },
      error: (error) => {
        console.error('POST error:', error);
      }
    });
  }


}
