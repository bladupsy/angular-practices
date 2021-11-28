import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Iroman', 'Spiderman', 'Wanda', 'Capitan America']
  heroeBorrado: string | any = ''


  borrarHeroe(){
    // this.heroes.splice(3) //borre el item 3
    // this.heroes = [] //borra todo el array
    //const heroeBorrado  =   this.heroes.shift() //borra el primer elemento
    return  this.heroeBorrado =   this.heroes.shift() || '' //borra el primer elemento
    console.log(this.heroeBorrado)
  }
}
