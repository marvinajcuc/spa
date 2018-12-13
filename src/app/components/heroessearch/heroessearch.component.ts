import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroessearch',
  templateUrl: './heroessearch.component.html'
})
export class HeroessearchComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;
  constructor(private _heroesService:HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute
              ) {

  }

  ngOnInit() {
    //this.heroes=this._heroesService.buscarHeroes("");
    this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
    } );
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}
