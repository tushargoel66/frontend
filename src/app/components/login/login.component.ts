import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('switchSignIn', [
      state(
        'front',
        style({
          transform: 'rotateY(0deg)',
          'backface-visibility': 'visible',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)',
        })
      ),
      state(
        'back',
        style({
          transform: 'rotateY(180deg)',
          'backface-visibility': 'hidden',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)',
        })
      ),
      transition('front => back', animate('800ms ease-out')),
      transition('back => front', animate('800ms ease-in')),
    ]),
    trigger('switchSignUp', [
      state(
        'front',
        style({
          transform: 'rotateY(0deg)',
          'backface-visibility': 'hidden',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)',
        })
      ),
      state(
        'back',
        style({
          transform: 'rotateY(180deg)',
          'backface-visibility': 'visible',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)',
        })
      ),
      transition('front => back', animate('800ms ease-out')),
      transition('back => front', animate('800ms ease-in')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  lockSymbol = faLock;
  
  switchSignInState: boolean = false;
  switchSignUpState: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admin'])
    }
  }

  switchSignIn() {
    this.switchSignInState = !this.switchSignInState;
    this.switchSignUpState = !this.switchSignUpState;
  }

  switchSignUp() {
    this.switchSignUpState = !this.switchSignUpState;
    this.switchSignInState = !this.switchSignInState;
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((result) => {
        if (result.status === 'SUCCESS') {
          this.router.navigate(['/admin']);
        } else if (result.status === 'FAILURE') {
          alert('Login Failed. Please Try Again!');
        }
      });
    }
  }
}
