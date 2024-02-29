import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { menCloths } from '../../../../../assets/data/Men/men_cloths';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [MatRadioModule, CommonModule, FormsModule, ProductCardComponent]
})
export class ProductDetailsComponent {
  selectedSize:any;
  relatedProducts:any;

  constructor(private router:Router){}

  ngOnInit(){
    this.relatedProducts = menCloths;
  }

  handleAddToCart(){
    this.router.navigate(['/cart']);
  }
}
