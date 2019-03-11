import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

//Required components for which route services will be activated for admins 
import { AdminSignInComponent } from '../../components/admin-sign-in/admin-sign-in.component';
import { AdminDashboardComponent } from '../../components/admin-dashboard/admin-dashboard.component';
import { AddStudentComponent } from '../../components/add-student/add-student.component';
import { StudentsListComponent } from '../../components/students-list/students-list.component';
import { EditStudentComponent } from '../../components/edit-student/edit-student.component';

// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { AdminSecureInnerPagesGuard } from "../../shared/guard/admin-secure-inner-pages.guard";

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-student', component: AddStudentComponent, canActivate: [AdminSecureInnerPagesGuard] },
  { path: 'view-students', component: StudentsListComponent, canActivate: [AdminSecureInnerPagesGuard] },
  { path: 'edit-student/:id', component: EditStudentComponent, canActivate: [AdminSecureInnerPagesGuard] },
  { path: 'admin-sign-in', component: AdminSignInComponent, canActivate: [AdminSecureInnerPagesGuard]}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }