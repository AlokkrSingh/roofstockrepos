import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofPropertiesComponent } from './roof-properties.component';

describe('RoofPropertiesComponent', () => {
  let component: RoofPropertiesComponent;
  let fixture: ComponentFixture<RoofPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoofPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
