import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {RoofStockService} from '../services/roof-stock.service'
import { RoofPost } from '../models/roofpost';
@Component({
  selector: 'app-roof-property',
  templateUrl: './roof-property.component.html',
  styleUrls: ['./roof-property.component.scss']
})
export class RoofPropertyComponent implements OnInit {
  roofPosts$: Observable<RoofPost>;
  Id: number;
  constructor(private roofPostService: RoofStockService, private avRoute: ActivatedRoute) { 
    debugger;
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.Id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit(): void {
    this.loadRoofPost();
  }

  loadRoofPost() {
    debugger;
    this.roofPosts$ = this.roofPostService.getRoofPost(this.Id);
  }

}
