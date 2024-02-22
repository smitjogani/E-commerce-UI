import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { OrderCardComponent } from "./order-card/order-card.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    imports: [CommonModule, MatCheckbox, OrderCardComponent]
})
export class OrderComponent {
  constructor(private router:Router){}
  
  orderFilter = [
    {value:"on_the_way",lable:"On The Way"},
    {value:"delivered",lable:"Delivered"},
    {value:"cancelled",lable:"Cancelled"},
    {value:"returned",lable:"Returned"},
  ]
  orders=[[1,1],[1,1,1]];
  
  navigateToOrderDetails = (id:Number) => {
    this.router.navigate([`order/{id}`]);
  }
} 
