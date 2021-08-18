import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
// declare var $:any ;
@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})

export class HeaderOneComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

    $(document).ready(function(){
      
      $(".header-one div:nth-child(3) span a").hover(function(){
        $(this).css("color","#FF9D48")
      },function(){
        $(this).css("color","#000")
      });

    });


  }

}
