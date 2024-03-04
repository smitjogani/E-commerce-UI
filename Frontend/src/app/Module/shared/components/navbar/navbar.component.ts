import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/login/login.component';
import { SignupComponent } from '../../../auth/signup/signup.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isMenMenuOpen: boolean = false;
  isWomenMenuOpen: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenMenu(): void {
    this.isMenMenuOpen = !this.isMenMenuOpen;
  }

  toggleWomenMenu(): void {
    this.isWomenMenuOpen = !this.isWomenMenuOpen;
  }

  openNavbarContent(menu: any) {}

  navigateToCart(path: any) {
    this.router.navigate([path]);
  }

  navigateHome(path:any){
    this.router.navigate([path]);
  }

  handleOpenLoginModel = () => {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: false,
    });
  };

  handleSignUpModel = () => {
    this.dialog.open(SignupComponent, {
      width: '400px',
      disableClose: false,
    });
  };
}
