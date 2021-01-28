import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneDataComponent } from './view-one-data.component';

describe('ViewOneDataComponent', () => {
  let component: ViewOneDataComponent;
  let fixture: ComponentFixture<ViewOneDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
