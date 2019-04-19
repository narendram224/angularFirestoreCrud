import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData:Employee;
  constructor(private toastr:ToastrService,private firestore:AngularFirestore) { }

  getEmployees(){
    return this.firestore.collection('Employee').snapshotChanges();
  }
}
