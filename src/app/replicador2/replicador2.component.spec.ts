import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Replicador2Component } from './replicador2.component';

describe('Replicador2Component', () => {
  let component: Replicador2Component;
  let fixture: ComponentFixture<Replicador2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Replicador2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Replicador2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
