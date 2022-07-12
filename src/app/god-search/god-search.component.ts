import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';


@Component({
  selector: 'app-god-search',
  templateUrl: './god-search.component.html',
  styleUrls: ['./god-search.component.css']
})
export class GodSearchComponent implements OnInit {

  gods!: God[];

  searchText: string = '';

  constructor(private godService: GodService) { }

  ngOnInit(): void {
    // this.gods = this.godService.filterGods(this.searchText);
  }

  searchGods(): void {
    console.log(this.searchText);
    var foundGods = this.godService.filterGods(this.searchText);
    console.log(foundGods);
    this.gods = foundGods;
  }

}
