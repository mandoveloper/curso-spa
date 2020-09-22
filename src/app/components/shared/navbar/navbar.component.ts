import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private router: Router, private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string): void {
    this.router.navigateByUrl(`/buscar/${termino}`);
  }
}
