import { Component, OnInit } from '@angular/core';
import { HeroTest } from '../hero-test';
import { HEROES } from '../mock-test';

@Component({
  selector: 'app-heroes-test',
  templateUrl: './heroes-test.component.html',
  styleUrls: ['./heroes-test.component.css'], 
})
export class HeroesTestComponent implements OnInit {

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  selectedHero?: HeroTest 

  onSelect(hero: HeroTest) {
    this.selectedHero = hero;
  }

}
