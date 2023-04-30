import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  item: String = "";
  list: String[] = [];

  addItem(){
    this.list.push(this.item);
  }

  removeItem(element:String){
    console.log(element)
    this.list = this.list.filter((value) => value !== element)
  }
}
