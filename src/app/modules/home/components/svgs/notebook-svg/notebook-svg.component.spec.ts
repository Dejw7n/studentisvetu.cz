import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookSvgComponent } from './notebook-svg.component';

describe('NotebookSvgComponent', () => {
  let component: NotebookSvgComponent;
  let fixture: ComponentFixture<NotebookSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
