import { Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import { CartComponent } from './Module/feature/components/cart/cart.component';

export const routes: Routes = [
    {'path':'', component:HomeComponent},
    {'path':':levelOne/:levelTwo',component:ProductsComponent},
    {'path':'cart',component:CartComponent}
];
