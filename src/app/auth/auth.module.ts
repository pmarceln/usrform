import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './_service/auth.service';
import { AuthGuard } from './auth-guard';

import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
      AuthService,
      AuthGuard
    ],
})
export class AuthModule {}
