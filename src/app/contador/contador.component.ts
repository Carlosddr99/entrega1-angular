import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  valor: number = 0

  reducirContador(){
    if(this.valor>0){
      this.valor -= 1;
    }
  }

  aumentaContador(){
    console.log("llegue")
    this.valor += 1;
  }

  reiniciarContador(){
    this.valor = 0;
  }
}
