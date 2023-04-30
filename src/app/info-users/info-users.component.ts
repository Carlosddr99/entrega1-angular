import { Component } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

interface User{
  nombre:string,
  apellidos: string,
  date: Date,
  telefono : number,
}

@Component({
  selector: 'app-info-users',
  templateUrl: './info-users.component.html',
  styleUrls: ['./info-users.component.scss']
})



export class InfoUsersComponent {

  nombre:string ="";
  apellidos:string ="";
  telefono:number =0;
  fecha:Date =new Date('');

  users: User[] = [];

  submitForm(){
    this.users.push({nombre:this.nombre,apellidos:this.apellidos,date:this.fecha,telefono:this.telefono})
  }
}
