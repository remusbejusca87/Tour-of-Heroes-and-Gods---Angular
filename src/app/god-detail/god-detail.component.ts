import { Component, OnInit, Input } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-god-detail',
  templateUrl: './god-detail.component.html',
  styleUrls: ['./god-detail.component.css']
})
export class GodDetailComponent implements OnInit {

  @Input() god?: God

  constructor(
    private route: ActivatedRoute,
    private godService: GodService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGod();
  }

  getGod(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.god = this.godService.getGod(id);

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.god) {
      this.godService.updateGod(this.god);
      this.goBack();
    }
  }

}
