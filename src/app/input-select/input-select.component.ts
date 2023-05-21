import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {
currency: any;
amountFrom: any;

@Input() countries: any;
@Input() countryConvert: any;
@Input() id : string = 'countryFrom';
@Input() amount: any;



@Output() childEvent = new EventEmitter();
@Output() childEvents = new EventEmitter();

onChange(value: any) {
  
  this.childEvents.emit(value.target);
}


onSetAmount(value:any) {
  this.childEvent.emit(value.target);

}
  
}
