import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestructureComponent } from './tablestructure.component';

describe('TablestructureComponent', () => {
  let component: TablestructureComponent;
  let fixture: ComponentFixture<TablestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablestructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
