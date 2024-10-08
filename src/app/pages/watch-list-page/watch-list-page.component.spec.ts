import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListPageComponent } from './watch-list-page.component';

describe('WatchListPageComponent', () => {
  let component: WatchListPageComponent;
  let fixture: ComponentFixture<WatchListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
