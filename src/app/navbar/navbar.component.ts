import { Component } from '@angular/core';

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

  }

}
