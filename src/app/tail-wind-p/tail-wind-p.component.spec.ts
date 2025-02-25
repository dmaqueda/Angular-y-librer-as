import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailWindPComponent } from './tail-wind-p.component';

describe('TailWindPComponent', () => {
  let component: TailWindPComponent;
  let fixture: ComponentFixture<TailWindPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailWindPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailWindPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
