import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratedTextComponent } from './decorated-text.component';

describe('DecoratedTextComponent', () => {
  let component: DecoratedTextComponent;
  let fixture: ComponentFixture<DecoratedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratedTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoratedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
