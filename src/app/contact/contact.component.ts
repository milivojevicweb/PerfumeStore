import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sendStatus="";

  constructor() {



  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);

  }

  onSend(){
    return this.sendStatus="Send!";
  }

}
