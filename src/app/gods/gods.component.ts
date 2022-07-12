import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {

  gods: God [] = [];

  constructor(private godService: GodService) { }

  ngOnInit(): void {
    this.getGods();
  }

  getGods(): void {
    this.gods = this.godService.getGods();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.godService.addGod({name} as God);
    this.getGods();
  }

  delete(god: God): void {
    this.godService.deleteGod(god.id);
    this.getGods();
  }


}


