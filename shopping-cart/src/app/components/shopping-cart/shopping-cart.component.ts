import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  goToStepper()
  {
    this.router.navigateByUrl('/stepper')
  }

}
