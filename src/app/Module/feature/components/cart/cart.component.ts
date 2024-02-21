import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardItemComponent } from "../../../shared/components/card-item/card-item.component";
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';
@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CommonModule, CardItemComponent,MatDividerModule]
})
export class CartComponent {
  cart=[1,1,1]

  constructor(private router:Router){}

  navigateToCheckout(){
    this.router.navigate(['checkout'])
  }
}
