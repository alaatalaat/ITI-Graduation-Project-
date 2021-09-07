import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ="";
  password:any ="";
  errormsg:any ="";
  errormsgflag = true;
  constructor(public Routerlnk:Router) { }

  save(d:any){
    console.log(d)
  }
  display(){
    console.log(this.password)
  }
  redAdmin(x:any , y:any){
    if( x.value=="admin" && y.value =="admin"){
      this.Routerlnk.navigateByUrl("/admin")
      this.errormsgflag = true;
    }
    else{
      this.errormsg ="اسم المستخدم او الرقم السري قد يكون خاطئ!";
      this.errormsgflag =false;
    }
  }
  ngOnInit(): void {
  }

}
