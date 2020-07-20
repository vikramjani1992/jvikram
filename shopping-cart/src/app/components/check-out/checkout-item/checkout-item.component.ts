import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  @Input() cartItem:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
