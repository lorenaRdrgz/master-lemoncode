import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPublicaComponent } from './header-publica.component';

describe('HeaderPublicaComponent', () => {
  let component: HeaderPublicaComponent;
  let fixture: ComponentFixture<HeaderPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPublicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
