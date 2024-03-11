import { Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import { CartComponent } from './Module/feature/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feature/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/feature/components/checkout/checkout.component';
import { PaymentComponent } from './Module/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './Module/feature/components/order/order.component';
import { OrderDetailsComponent } from './Module/feature/components/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';
import { LoginComponent } from './Module/auth/login/login.component';
import { SignupComponent } from './Module/auth/signup/signup.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Module/admin/admin-routing.module').then(
        (m) => AdminRoutingModule
      ),
  },
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
  { path: ':levelOne/:levelTwo', component: ProductsComponent },
];
