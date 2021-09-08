import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYodawyComponent } from './about-yodawy.component';

describe('AboutYodawyComponent', () => {
  let component: AboutYodawyComponent;
  let fixture: ComponentFixture<AboutYodawyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutYodawyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutYodawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
