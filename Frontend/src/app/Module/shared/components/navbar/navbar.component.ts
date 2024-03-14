import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/login/login.component';
import { SignupComponent } from '../../../auth/signup/signup.component';
import { userService } from '../../../../State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/Appstate';

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
  userProfile: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: userService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;
      if (user.userProfile) {
        this.dialog.closeAll();
      }
    });
    console.log(this.userProfile);
  }

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

  navigateHome(path: any) {
    this.router.navigate([path]);
  }

  handleOpenLoginModel = (path: any) => {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: false,
    });
    // this.router.navigate([path]);
  };

  handleSignUpModel = (path: any) => {
    this.dialog.open(SignupComponent, {
      width: '400px',
      disableClose: false,
    });
    // this.router.navigate([path]);
  };

  handleLogout() {
    this.userService.logout();
  }
}
