import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaContraPage } from './resta-contra.page';

describe('RestaContraPage', () => {
  let component: RestaContraPage;
  let fixture: ComponentFixture<RestaContraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
