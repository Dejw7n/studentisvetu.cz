import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSvgComponent } from './mobile-svg.component';

describe('MobileSvgComponent', () => {
  let component: MobileSvgComponent;
  let fixture: ComponentFixture<MobileSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
