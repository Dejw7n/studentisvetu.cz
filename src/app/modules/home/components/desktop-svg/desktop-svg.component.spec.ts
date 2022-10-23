import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSvgComponent } from './desktop-svg.component';

describe('DesktopSvgComponent', () => {
  let component: DesktopSvgComponent;
  let fixture: ComponentFixture<DesktopSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
