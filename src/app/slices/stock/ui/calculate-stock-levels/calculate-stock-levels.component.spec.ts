import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateStockLevelsComponent } from './calculate-stock-levels.component';

describe('CalculateStockLevelsComponent', () => {
  let component: CalculateStockLevelsComponent;
  let fixture: ComponentFixture<CalculateStockLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateStockLevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateStockLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
