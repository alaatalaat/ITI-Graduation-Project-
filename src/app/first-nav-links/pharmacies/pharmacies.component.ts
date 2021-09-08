import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('.next-one').click(function () {
        $('.carousel-indicators li:nth-of-type(2)')
          .addClass('active')
          .siblings()
          .removeClass('active');
        $("div[class='carousel-item']:nth-child(2)")
          .addClass('active')
          .siblings()
          .removeClass('active');
      });

      $('.next-two').click(function () {
        $('.carousel-indicators li:nth-of-type(3)')
          .addClass('active')
          .siblings()
          .removeClass('active');
        $("div[class='carousel-item']:nth-child(3)")
          .addClass('active')
          .siblings()
          .removeClass('active');
      });

      $('.next-three').click(function () {
        $('.carousel-indicators li:nth-of-type(4)')
          .addClass('active')
          .siblings()
          .removeClass('active');
        $("div[class='carousel-item']:nth-child(4)")
          .addClass('active')
          .siblings()
          .removeClass('active');
      });

      $('.next-four').click(function () {
        $('.carousel-indicators li:nth-of-type(5)')
          .addClass('active')
          .siblings()
          .removeClass('active');
        $("div[class='carousel-item']:nth-child(5)")
          .addClass('active')
          .siblings()
          .removeClass('active');
      });
    });
  }

  reload() {
    window.location.reload();
  }
}
