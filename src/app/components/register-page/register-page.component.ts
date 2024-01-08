import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  empName:string="";
  empEmail:string="";
  password:string="";

  constructor(private router:Router,private http: HttpClient){

  }

  save(){
    let bodyData={
      "empName":this.empName,
      "empEmail":this.empEmail,
      "password":this.password
    };
    this.http.post("http://localhost:8080/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>{
      {
        console.log(resultData);
        alert("Employee Registered SuccessFully");

           // Redirect to the login page after successful registration
           this.router.navigate(['']); // Replace '/login' with the actual route to your login page
      }
    });
    
  }

}
