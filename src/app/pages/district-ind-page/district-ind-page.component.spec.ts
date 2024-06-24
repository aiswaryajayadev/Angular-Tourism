import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictIndPageComponent } from './district-ind-page.component';

describe('DistrictIndPageComponent', () => {
  let component: DistrictIndPageComponent;
  let fixture: ComponentFixture<DistrictIndPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictIndPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictIndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
