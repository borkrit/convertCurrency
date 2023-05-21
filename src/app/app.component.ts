import { Component } from '@angular/core';
import { CurrencyApiService } from './currency-api.service';
import axios from 'axios';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convertCurrency';
  constructor (private currencyApiService : CurrencyApiService ){}

  
  countryFrom: any = 'USD';
  countryTo: any = 'UAH';
  resultConverter:any = 0;
  amountHow: number = 100;
  countries:any = ['USD','EUR','UAH'];
  resultObject:any = 0;




  onChange(value:any){
    console.log(value.value)

    value.id == 'countryFrom'? this.countryFrom = value.value : this.countryTo = value.value;
    this.apiCall();
    if(this.countryFrom === this.countryTo ){
      this.resultObject = 1;
    }
    

  }


  onSetAmount(value:any){
    console.log(value);

    if(value.value >0){
      this.amountHow = value.value;

      value.id == 'countryFrom' ? this.multiplication(value.value) : this.division(value.value);

      
    }

  }

 

    multiplication(val:number){
      this.resultConverter = val * this.resultObject

    }
    division(val:number){
          this.amountHow = val  / this.resultObject ; 
    }
  

  apiCall(){
    this.currencyApiService.getRecentExchange(this.countryFrom,this.countryTo)
    .then(response => {
      this.resultObject = Object.values(response.data.rates);
      this.multiplication(this.amountHow);
    })
  }



   async ngOnInit(){
    this.multiplication(this.amountHow);
     this.apiCall();
  }
   
}
