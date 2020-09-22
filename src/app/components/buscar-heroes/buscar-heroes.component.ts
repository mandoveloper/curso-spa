import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html'
})
export class BuscarHeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute,  private heroesService: HeroesService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes(params[`termino`]);
      console.log(params[`termino`]);
    });

  }



}
