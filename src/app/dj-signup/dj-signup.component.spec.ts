import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjSignupComponent } from './dj-signup.component';

describe('DjSignupComponent', () => {
  let component: DjSignupComponent;
  let fixture: ComponentFixture<DjSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjSignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
