import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableOfContentsComponent } from '@ngspot/table-of-contents';

import { DemoMainContentComponent } from './demo-main-content.component';

@Component({
  selector: 'ngs-table-of-contents',
  standalone: true,
  template: '',
})
class MockTableOfContentsComponent {}

describe(DemoMainContentComponent.name, () => {
  let component: DemoMainContentComponent;
  let fixture: ComponentFixture<DemoMainContentComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(DemoMainContentComponent, {
      remove: { imports: [TableOfContentsComponent] },
      add: { imports: [MockTableOfContentsComponent] },
    });

    await TestBed.configureTestingModule({
      imports: [DemoMainContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
