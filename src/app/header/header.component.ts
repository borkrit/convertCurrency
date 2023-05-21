import { Component } from '@angular/core';
import { CurrencyApiService } from '../currency-api.service'; 
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoTitle:string = 'Currency converter';
  // currentCountry:string = 'UAH';
  // futureCountry: string = 'EUR, USD';
  currentCountry:any = ['UAH','USD','EUR'];
  futureCountry: any = ['UAH','USD','EUR'];

  exrate:any=[];

  constructor ( private currencyApiService: CurrencyApiService) {}

  callApi (){

    for( const current of this.currentCountry){
      for ( const future of this.futureCountry){
          if(current == future) continue;



          this.currencyApiService.getRecentExchange(current,future)
          .then(response => {
          this.exrate.push( {
            current: current , rates : Object.entries(response.data.rates).toString().replace(/[\s,%]/g, ' ' )
          })
          
            console.log(this.exrate)
        })
          
          .catch(error => console.log('error', error));
      }
    }




  }


   ngOnInit(){
     this.callApi();
  }
  
  

}
