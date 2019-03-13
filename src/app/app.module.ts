import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// App components for Admin
import { AdminSignInComponent } from './components/admin-sign-in/admin-sign-in.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';


// Firebase services + enviorment module
// Firebase function imports
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//Firebase Database import here testing from a third version database
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Auth service
import { AuthService } from './shared/services/auth.service';

//NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';


// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; // Alert message using NGX toaster

// CRUD service
import { CrudService } from './shared/services/crud.service';    // CRUD services API


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
	AdminSignInComponent,
    AdminDashboardComponent,
	AddStudentComponent,
    StudentsListComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
	/*AngularFireModule.initializeApp(environment.firebase, 'StudentInformationSystem'), */
	AngularFireDatabaseModule,  // Firebase database module 
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
	BrowserAnimationsModule,    // Required animations module for Toastr
	ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,      
    }),
	NgxPaginationModule  // Include it in imports array
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }