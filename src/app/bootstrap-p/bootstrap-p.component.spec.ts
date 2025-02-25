import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPComponent } from './bootstrap-p.component';

describe('BootstrapPComponent', () => {
  let component: BootstrapPComponent;
  let fixture: ComponentFixture<BootstrapPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
