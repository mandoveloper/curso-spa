import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor( private heroesServices: HeroesService) {

  }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  obtenerHeroes(): any {
    this.heroes = this.heroesServices.getHeroes();
    console.log(this.heroes);

  }
}
