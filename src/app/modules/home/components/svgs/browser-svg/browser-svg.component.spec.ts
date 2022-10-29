import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserSvgComponent } from './browser-svg.component';

describe('BrowserSvgComponent', () => {
  let component: BrowserSvgComponent;
  let fixture: ComponentFixture<BrowserSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
