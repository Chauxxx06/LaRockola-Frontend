import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsforcategoryComponent } from './songsforcategory.component';

describe('SongsforcategoryComponent', () => {
  let component: SongsforcategoryComponent;
  let fixture: ComponentFixture<SongsforcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsforcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsforcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
