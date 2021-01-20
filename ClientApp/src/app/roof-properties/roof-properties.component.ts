import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {RoofStockService} from '../services/roof-stock.service'
import { RoofPost } from '../models/roofpost';

@Component({
  selector: 'app-roof-properties',
  templateUrl: './roof-properties.component.html',
  styleUrls: ['./roof-properties.component.scss']
})
export class RoofPropertiesComponent implements OnInit {
  roofPosts$: any;

  constructor(private roofPostService: RoofStockService) { }

  ngOnInit(): void {
    this.loadRoofPosts();
  }

  loadRoofPosts() {
    debugger;
    this.roofPostService.getRoofPosts().subscribe((data) => {
      console.log(data);      
      this.roofPosts$ = data.properties; // on data receive populate dataSource.data array
      return data;
    });
  }

  delete(Id) {
    debugger;
    const ans = confirm('Do you want to delete blog post with id: ' + Id);
    if (ans) {
      this.roofPostService.deleteRoofPost(Id).subscribe((data) => {
        this.loadRoofPosts();
      });
    }
  }
}
