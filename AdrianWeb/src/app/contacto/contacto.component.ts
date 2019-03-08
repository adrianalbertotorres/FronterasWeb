import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as swal from 'sweetalert'; // npm install sweetalert

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  datos:any={nombre:"",asunto:"",email:"",mensaje:""}
 
    constructor(public _MessageService: MessageService) {
   }
    contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log ("mensaje enviado");
    swal.default("Tu mensaje se ha enviado correctamente","Gracias por contactarnos");
    this.datos={nombre:"",asunto:"",email:"",mensaje:""}
    });
    }
   }
