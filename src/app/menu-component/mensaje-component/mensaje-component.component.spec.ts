import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeComponentComponent } from './mensaje-component.component';

describe('MensajeComponentComponent', () => {
  let component: MensajeComponentComponent;
  let fixture: ComponentFixture<MensajeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
