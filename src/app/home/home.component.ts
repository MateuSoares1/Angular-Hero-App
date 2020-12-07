import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HeroService } from '../shared/service/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hero: any;
  heros: any[];
  constructor(private breakpointObserver: BreakpointObserver, public heroService: HeroService) { }


  
  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.heros = [];
    this.heroService.getHeros().subscribe(
      result => {
        debugger;
        this.hero = result;
        for (let index = 0; index < this.hero.length; index++) {
          this.heros.push(this.hero[index]);
        }
        console.log(this.heros);
      }
    );
  }
}
