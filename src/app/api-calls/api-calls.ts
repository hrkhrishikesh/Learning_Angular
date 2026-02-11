import { Component } from '@angular/core';
import { Services } from './services/services';

@Component({
  selector: 'app-api-calls',
  imports: [],
  templateUrl: './api-calls.html',
  styleUrl: './api-calls.css'
})
export class ApiCalls {

  constructor(private productService: Services){
  }

  productList:any[]|undefined = [];

  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);  

      this.productList = data.products;
    })

    
  }

}
