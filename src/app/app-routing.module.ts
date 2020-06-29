import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard';

import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'project', canActivate: [AuthGuard], loadChildren: () => import(`./project/project.module`).then(m => m.ProjectModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
