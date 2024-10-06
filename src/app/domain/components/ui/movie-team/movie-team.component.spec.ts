import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTeamComponent } from './movie-team.component';

describe('MovieTeamComponent', () => {
  let component: MovieTeamComponent;
  let fixture: ComponentFixture<MovieTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
