import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; 
import { storage } from 'src/app/utils/storage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  message : string = "";
  ShowAlert : boolean = false;
  IsPassEmpty : boolean = false;
  IsUserEmpty : boolean = false;
  Input: any={};
  DummyUser = [
     {
       user:'Admin',
       passwd:'Admin'
     },
     {
       user:'User',
       passwd:'User'
     },
     {
       user:'User',
       passwd:'Pass'
     }
  ]
  constructor(
    private LocalStorage: storage,
    private Router_: Router
    ){

  }
  ngOnInit(): void {
    
  }
  login(): void {
    if(this.Input.username==""){
      this.IsUserEmpty=true;
      this.showAlert("Username cannot be empty");
      return;
    }
    else{
      this.IsUserEmpty=false;
    }

    if(this.Input.paswd=="" || this.Input.paswd == undefined){
      this.IsPassEmpty=true;
      this.showAlert("Password cannot be empty");
      return;
    }
    else{
      this.IsPassEmpty=false;
    }

    let dtUser = this.DummyUser.find((usrname) => usrname.user === this.Input.username);
    if(dtUser){
      if(dtUser.passwd!=this.Input.paswd ){
        this.showAlert("Password did not match");
      }
      else{
        localStorage.setItem('Username',this.Input.username);
        this.Router_.navigate(['/Home']);
      }
    }
    else{
     this.notFound(this.Input.username,true);
    }

  }
  notFound(user:string,match:boolean){
    Swal.fire({
      title: 'Error',
      text: 'Sorry, User "'+user+'" was not found',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
  showAlert(message:string){
    this.message=message;     
    this.ShowAlert=true; 
      setTimeout(() =>{
        this.ShowAlert=false;
     },3000);
  }
}
