import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {RoofStockService} from '../services/roof-stock.service'
import { RoofPost } from '../models/roofpost';

@Component({
  selector: 'app-roof-property-add-edit',
  templateUrl: './roof-property-add-edit.component.html',
  styleUrls: ['./roof-property-add-edit.component.scss']
})
export class RoofPropertyAddEditComponent implements OnInit {
  form: FormGroup;
  actionType: string;
  formAddress: string;
  formYearBuilt: string;
  formListPrice: string;
  formMonthlyRent: string;
  Id: number;
  errorMessage: any;
  existingRoofPost: RoofPost;
  constructor(private roofPostService: RoofStockService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formAddress = 'Address';
    this.formYearBuilt = 'YearBuilt';
    this.formListPrice = 'ListPrice';
    this.formMonthlyRent = 'MonthlyRent';
    if (this.avRoute.snapshot.params[idParam]) {
      this.Id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        Id: 0,
        Address: ['', [Validators.required]],
        YearBuilt: ['', [Validators.required]],
        MonthlyRent: ['', [Validators.required]],
        ListPrice: ['', [Validators.required]]
      }
    )
        
    
    // new FormGroup(
    //   {
    //     Id: new FormControl(0),
    //     formAddress: new FormControl(""),
    //     formYearBuilt: new FormControl(""),
    //     formMonthlyRent: new FormControl(""),
    //     formListPrice: new FormControl("")
    //   }
    // )
   }

  ngOnInit(): void {
    debugger;
    if (this.Id > 0) {
      this.actionType = 'Edit';
      this.roofPostService.getRoofPost(this.Id)
        .subscribe(data => (
          this.existingRoofPost = data,
          this.form.controls[this.formAddress].setValue(data.Address),
          this.form.controls[this.formYearBuilt].setValue(data.YearBuilt),
          this.form.controls[this.formListPrice].setValue(data.ListPrice),
          this.form.controls[this.formMonthlyRent].setValue(data.MonthlyRent)
        ));
    }
  }

  save() {
    debugger;
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      debugger;
      let roofPost: RoofPost = {       
        Address: this.form.get(this.formAddress).value,
        YearBuilt: this.form.get(this.formYearBuilt).value,
        MonthlyRent: this.form.get(this.formMonthlyRent).value,
        ListPrice: this.form.get(this.formListPrice).value,
        GrossYield: (this.form.get(this.formMonthlyRent).value)*12/this.form.get(this.formListPrice).value       
      };

      this.roofPostService.saveRoofPost(roofPost)
        .subscribe((data) => {
          this.router.navigate(['/roofpost', data.Id]);
        });
    }

    if (this.actionType === 'Edit') {
      debugger;
      let roofPost: RoofPost = {
        Id: this.existingRoofPost.Id,
        Address: this.existingRoofPost.Address,
        YearBuilt: this.existingRoofPost.YearBuilt,
        MonthlyRent: this.existingRoofPost.MonthlyRent,
        ListPrice: this.existingRoofPost.ListPrice,
        GrossYield: this.form.get("").value,
        
      };
      this.roofPostService.updateRoofPost(roofPost.Id, roofPost)
        .subscribe((data) => {
          this.router.navigate([this.router.url]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  // get title() { return this.form.get(this.formTitle); }
  // get body() { return this.form.get(this.formBody); }

  // createRoofPost() {
  //   this.roofPostService.saveRoofPost(this.);
  // }

  // updateRoofPost(Id){
  //   this.roofPostService.updateRoofPost(Id,roofPosts$);
  // }

}
