import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
 
    constructor(public _MessageService: MessageService) {
   }
    contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log ("mensaje enviado");
    });
    }
   }
