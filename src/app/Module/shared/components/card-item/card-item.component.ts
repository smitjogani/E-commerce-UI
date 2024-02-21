import { Component } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  updateCartItem(num:Number){
    console.log(num);
  }

  removeCartItem(){
    console.log("Remove Cart Item")
  }
}
