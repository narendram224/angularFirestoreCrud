import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    
  constructor(private employee:EmployeeService,private firestore:AngularFirestore,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

    resetForm(form? :NgForm){
      if(form!=null)
      form.resetForm();
      this.employee.formData={
        id:null,
        fullName:'',
        empcode:'',
        mobile:'',
        position:''
      }
    }
    onSubmit(form:NgForm){
      let data = Object.assign({},form.value) ;
          delete data.id;
      if (form.value.id==null) {
        this.firestore.collection('Employee').add(data).then(data=>{
          this.toastr.success("sucessfully registration");
          console.log(data);
        }).catch(err=>{
            this.toastr.error("error to upload the data");
        });
      }
     else{
       this.firestore.doc(`Employee/${form.value.id}`).update(data).then(result=>{
         this.toastr.success("data is updated sucessfully");
       }).catch(err=>{
         this.toastr.error("err data is not updated",err);
       })
     }
      this.resetForm(form);
    }
}
