import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrivadaComponent } from './header-privada.component';

describe('MenuComponent', () => {
  let component: HeaderPrivadaComponent;
  let fixture: ComponentFixture<HeaderPrivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPrivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
