import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { storage } from './utils/storage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(
    private LocalStorage:storage,
    private Router_: Router
  ){}
  ngOnInit(): void {
    initFlowbite();
    this.CheckLogin();
  }
  CheckLogin(){
    var dtUser = this.LocalStorage.getUser('Username');

    if(dtUser){
      this.Router_.navigate(['/Home']);
    }
    else{
      this.Router_.navigate(['Login']);
    }
  }
  
}
