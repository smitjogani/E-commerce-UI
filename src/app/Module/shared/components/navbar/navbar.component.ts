import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen : boolean = false;
  isMenMenuOpen : boolean = false;
  isWomenMenuOpen : boolean = false;

  constructor(private router:Router){}

  toggleMenu():void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenMenu():void{
    this.isMenMenuOpen = !this.isMenMenuOpen;
  }

  toggleWomenMenu():void{
    this.isWomenMenuOpen = !this.isWomenMenuOpen;
  }

  openNavbarContent(menu: any) {

  }

  navigateToCart(path: any) {
    this.router.navigate([path]);
  }

}
