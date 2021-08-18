import { Component, OnInit } from '@angular/core';
import * as $ from "jquery" ;

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})
export class SecondNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(".second-navbar .nav-item .nav-link").hover(function(){
        $(this).css("color","#FF9D48")
      },function(){
        $(this).css("color","#12233F")
      });
    });

  }

}
