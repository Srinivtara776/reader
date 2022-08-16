import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsubscribedbooksComponent } from './getsubscribedbooks.component';

describe('GetsubscribedbooksComponent', () => {
  let component: GetsubscribedbooksComponent;
  let fixture: ComponentFixture<GetsubscribedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsubscribedbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsubscribedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
