import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurChef } from './meet-our-chef';

describe('MeetOurChef', () => {
  let component: MeetOurChef;
  let fixture: ComponentFixture<MeetOurChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetOurChef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetOurChef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
