import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/internal/operators/tap';
import { noop } from 'rxjs/internal/util/noop';

import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService: AuthService,
  ) {
      this.form = fb.group({
          email: ['pmarceln@yahoo.com', [Validators.required]],
          password: ['qwerty', [Validators.required]],
      });
  }

  ngOnInit(): void {
    this.authService.token$.subscribe(
      (token: string) => {
        if (token && token.length > 0) {
          this.router.navigateByUrl('/project');
        }
      }
    );
  }

  login() {
      const val = this.form.value;
      this.authService.login(val.email, val.password).subscribe(noop, noop);
  }
}
