import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabwrapperComponent } from './tabwrapper.component';

describe('TabwrapperComponent', () => {
  let component: TabwrapperComponent;
  let fixture: ComponentFixture<TabwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabwrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
