import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  sflag =false;
  heflag = false;
  hflag =false;
  hrflag = true;
  bflag = true;
  showAdd2(){
    this.sflag = false;
    this.heflag = true;
    this.hrflag = true;
    this.bflag =true;
  }
  showhealth(){
    this.heflag = false;
    this.sflag = true;
    this.bflag =true;

  }
  showHair(){
    this.hrflag =false;
    this.heflag = true;
    this.sflag = true;
    this.bflag =true;
  }
  showB(){
    this.bflag =false;
    this.hrflag =true;
    this.heflag = true;
    this.sflag = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
