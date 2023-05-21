import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  private apiKey:string = 'ojyGQznl17Ah4uWi42sut7chyRHX6Lzj';

  constructor() { }

  async getRecentExchange(base:string, symbols:string){

    return await axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`,{
      headers:{
        'apikey':  this.apiKey
      },
      
    })
  }

}
