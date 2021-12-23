import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2pgComponent } from './gallery2pg.component';

describe('Gallery2pgComponent', () => {
  let component: Gallery2pgComponent;
  let fixture: ComponentFixture<Gallery2pgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gallery2pgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2pgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
