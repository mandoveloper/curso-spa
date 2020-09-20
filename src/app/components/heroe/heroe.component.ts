import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private heroesService: HeroesService , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.verHeroe(this.activatedRoute.snapshot.paramMap.get('id'));
    // console.log(indice);
  }

  verHeroe(id: string): Heroe {

    this.heroe = this.heroesService.getHeroe(id);
    return  this.heroe;

  }

}
