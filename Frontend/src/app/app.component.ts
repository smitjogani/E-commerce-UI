import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { NavbarComponent } from './Module/shared/components/navbar/navbar.component';
import { FooterComponent } from './Module/shared/components/footer/footer.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    RouterOutlet,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'clothshop';
}