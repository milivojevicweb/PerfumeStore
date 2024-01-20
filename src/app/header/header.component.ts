import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   // for window scroll events

   @HostListener('window:scroll')
  scrollFunction() {
    if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
      document.getElementById("heder").style.position = "fixed";
      document.getElementById("heder").style.backgroundColor = "white";
      document.getElementById("marco").style.color = "black";
      var items=document.getElementsByClassName('navLink') as HTMLCollectionOf<HTMLElement>
      for (let i=0;i<items.length;i++){
        items[i].style.color="black";
      }
    } else {
      document.getElementById("heder").style.position = "absolute";
      document.getElementById("heder").style.backgroundColor = "transparent";
      document.getElementById("heder").style.transition = "0.5s";
      document.getElementById("marco").style.color = "white";
      var items=document.getElementsByClassName('navLink') as HTMLCollectionOf<HTMLElement>
      for (let i=0;i<items.length;i++){
        items[i].style.color="white";
      }
    }
  }

}
