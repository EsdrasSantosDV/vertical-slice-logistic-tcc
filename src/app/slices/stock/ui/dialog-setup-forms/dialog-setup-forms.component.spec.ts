import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSetupFormsComponent } from './dialog-setup-forms.component';

describe('DialogSetupFormsComponent', () => {
  let component: DialogSetupFormsComponent;
  let fixture: ComponentFixture<DialogSetupFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSetupFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogSetupFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
