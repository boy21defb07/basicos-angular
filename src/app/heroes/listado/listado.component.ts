import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{

  heroes: string[] = ['ironman','thor','spiderman','hulk','antman']
  heroeborrado: string = '';
  // esfalso: boolean = false;

  borrarHeroe():void{
    console.log('borrando...');
    this.heroeborrado = this.heroes.shift() !!  ; 
    // this.heroes.pop();
    // this.esfalso = true;

  }
}