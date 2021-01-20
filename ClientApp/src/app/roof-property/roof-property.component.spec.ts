import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofPropertyComponent } from './roof-property.component';

describe('RoofPropertyComponent', () => {
  let component: RoofPropertyComponent;
  let fixture: ComponentFixture<RoofPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
