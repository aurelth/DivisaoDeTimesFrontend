import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideTeamsComponent } from './divide-teams.component';

describe('DivideTeamsComponent', () => {
  let component: DivideTeamsComponent;
  let fixture: ComponentFixture<DivideTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivideTeamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivideTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
