import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofPropertyAddEditComponent } from './roof-property-add-edit.component';

describe('RoofPropertyAddEditComponent', () => {
  let component: RoofPropertyAddEditComponent;
  let fixture: ComponentFixture<RoofPropertyAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofPropertyAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofPropertyAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
