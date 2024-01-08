import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  empName:string="";
  empEmail:string="";
  password:string="";



  constructor(private router:Router,private http: HttpClient){

  }

  openRegistrationForm():any{
   const registrationFormUrl = 'http://localhost:4200/register';

   window.open(registrationFormUrl, '-blank')


}

  login(){
    console.log(this.empEmail);
    console.log(this.password);

    let bodyData= {
      empEmail: this.empEmail,
      password: this.password
  };

  this.http.post("http://localhost:8080/login",bodyData).subscribe( (resultData:any) =>{

        console.log(resultData);

    if(resultData.message=="email not match"){
      alert("Email not Exits")
    }

    else if(resultData.message=="login success"){
      this.router.navigateByUrl('/home')
    }

    else{
      alert("incorrect email and password not match")
    }
  })

  
  }



}
