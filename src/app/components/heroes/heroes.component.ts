import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor( private heroesServices: HeroesService, private router: Router) {

  }

  ngOnInit(): void {
    this.obtenerHeroes();
  }

  // tslint:disable-next-line: typedef
  obtenerHeroes() {
    this.heroes = this.heroesServices.getHeroes();
    console.log(this.heroes);
  }

  // tslint:disable-next-line: typedef
  verHeroe(id: number) {
    console.log(id);
    return this.router.navigateByUrl(`/heroe/${id}`);
  }
}
