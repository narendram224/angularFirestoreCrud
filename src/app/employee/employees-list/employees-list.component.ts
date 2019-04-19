import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
    list:Employee[];
  constructor(private Empservice:EmployeeService,private firestore:AngularFirestore,private toastr:ToastrService) { }

  ngOnInit() {
    this.Empservice.getEmployees().subscribe(firestoreData=>{
      this.list  =firestoreData.map(items=>{
            return {
              id : items.payload.doc.id,
              ...items.payload.doc.data() 
            } as Employee;
      })
    })
console.log("the lsit data is",this.list);
  }

  onEdit(emp:Employee){
      this.Empservice.formData = Object.assign({},emp);
  }
  onDelete(id:string){
      if(confirm("are you sure to delte")){
          this.firestore.doc(`Employee/${id}`).delete().then(result=>{
            this.toastr.warning("data is delte succesfull")
          }).catch(err=>{
            this.toastr.error("data is not delted");
          })
      }
  }
}
