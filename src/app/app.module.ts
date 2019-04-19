import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
// importing firebase module
import  {AngularFireModule} from '@angular/fire';
import  {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { EmployeeService } from './shared/employee.service';
import {Employee} from '../app/shared/employee.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFirestoreModule,FormsModule,BrowserAnimationsModule,ToastrModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
