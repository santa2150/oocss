import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaComponent } from './carta.component';

describe('CartaComponent', () => {
  let component: CartaComponent;
  let fixture: ComponentFixture<CartaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartaComponent]
    });
    fixture = TestBed.createComponent(CartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
