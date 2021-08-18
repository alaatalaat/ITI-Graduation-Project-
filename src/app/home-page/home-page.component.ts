import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {

      $(".second-div .row div div").hover(
        function() {
        $(this).css('opacity','0.6')
        },
        function(){
          $(this).css('opacity','1')
      });


      $(".famous-prod .row div.one").mouseenter(
        function(){
        $(".famous-prod .row div span.one").css("display","block");
      });
      $(".famous-prod .row div.one").mouseleave(
        function(){
        $(".famous-prod .row div span.one").css("display","none");
      });

      $(".famous-prod .row div.two").mouseenter(
        function(){
        $(".famous-prod .row div span.two").css("display","block");
      });
      $(".famous-prod .row div.two").mouseleave(
        function(){
        $(".famous-prod .row div span.two").css("display","none");
      });

      $(".famous-prod .row div.three").mouseenter(
        function(){
        $(".famous-prod .row div span.three").css("display","block");
      });
      $(".famous-prod .row div.three").mouseleave(
        function(){
        $(".famous-prod .row div span.three").css("display","none");
      });

      $(".famous-prod .row div.four").mouseenter(
        function(){
        $(".famous-prod .row div span.four").css("display","block");
      });
      $(".famous-prod .row div.four").mouseleave(
        function(){
        $(".famous-prod .row div span.four").css("display","none");
      });

      $(".famous-prod .row div.five").mouseenter(
        function(){
        $(".famous-prod .row div span.five").css("display","block");
      });
      $(".famous-prod .row div.five").mouseleave(
        function(){
        $(".famous-prod .row div span.five").css("display","none");
      });

      $(".famous-prod .row div.six").mouseenter(
        function(){
        $(".famous-prod .row div span.six").css("display","block");
      });
      $(".famous-prod .row div.six").mouseleave(
        function(){
        $(".famous-prod .row div span.six").css("display","none");
      });

      $(".famous-prod .row div.seven").mouseenter(
        function(){
        $(".famous-prod .row div span.seven").css("display","block");
      });
      $(".famous-prod .row div.seven").mouseleave(
        function(){
        $(".famous-prod .row div span.seven").css("display","none");
      });

      $(".famous-prod .row div.eight").mouseenter(
        function(){
        $(".famous-prod .row div span.eight").css("display","block");
      });
      $(".famous-prod .row div.eight").mouseleave(
        function(){
        $(".famous-prod .row div span.eight").css("display","none");
      });

      $(".famous-prod .row div.nine").mouseenter(
        function(){
        $(".famous-prod .row div span.nine").css("display","block");
      });
      $(".famous-prod .row div.nine").mouseleave(
        function(){
        $(".famous-prod .row div span.nine").css("display","none");
      });

      $(".famous-prod .row div.ten").mouseenter(
        function(){
        $(".famous-prod .row div span.ten").css("display","block");
      });
      $(".famous-prod .row div.ten").mouseleave(
        function(){
        $(".famous-prod .row div span.ten").css("display","none");
      });







    });

  }

  


}
