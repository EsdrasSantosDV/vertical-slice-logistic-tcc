import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTableSetupComponent } from './stock-table-setup.component';

describe('StockTableSetupComponent', () => {
  let component: StockTableSetupComponent;
  let fixture: ComponentFixture<StockTableSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTableSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockTableSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
