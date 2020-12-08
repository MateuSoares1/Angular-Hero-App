import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HeroService } from '../shared/service/hero.service';
import { Hero } from '../shared/model/hero.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 public heros: Hero[];
  constructor(public heroService: HeroService) { }


  
  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.heros = [];
    this.heroService.getHeros().subscribe(
      result => {
        this.heros = result;             
      }
    );
  }
}
