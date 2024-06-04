import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStaticsComponent } from './covid-statics.component';

describe('CovidStaticsComponent', () => {
  let component: CovidStaticsComponent;
  let fixture: ComponentFixture<CovidStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidStaticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovidStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
