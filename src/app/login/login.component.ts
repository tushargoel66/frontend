import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeOutAnimation } from 'angular-animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('switchSignIn', [
      state(
        'front',
        style({
          transform: "rotateY(0deg)",
          'backface-visibility': 'visible',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)'
        })
      ),
      state(
        'back',
        style({
          transform: "rotateY(180deg)",
          'backface-visibility': 'hidden',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)'
        })
      ),
      transition('front => back', animate('800ms ease-out')),
      transition('back => front', animate('800ms ease-in')),
    ]),
    trigger('switchSignUp', [
      state(
        'front',
        style({
          transform: "rotateY(0deg)",
          'backface-visibility': 'hidden',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)'
        })
      ),
      state(
        'back',
        style({
          transform: "rotateY(180deg)",
          'backface-visibility': 'visible',
          'background-color': 'linear-gradient(#2196f3, #ef1e63)'
        })
      ),
      transition('front => back', animate('800ms ease-out')),
      transition('back => front', animate('800ms ease-in')),
    ])
  ]
})
export class LoginComponent {

  switchSignInState: boolean = false;
  switchSignUpState: boolean = true;
 
  switchSignIn() {
    this.switchSignInState = !this.switchSignInState;
    this.switchSignUpState = !this.switchSignUpState;
  }

  switchSignUp() {
    this.switchSignUpState = !this.switchSignUpState;
    this.switchSignInState = ! this.switchSignInState;
  }

}
