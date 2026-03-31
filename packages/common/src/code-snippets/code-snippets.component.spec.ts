import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippetsComponent } from './code-snippets.component';

describe(CodeSnippetsComponent.name, () => {
  let component: CodeSnippetsComponent;
  let fixture: ComponentFixture<CodeSnippetsComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(CodeSnippetsComponent, {
      set: {
        template: '',
      },
    });

    await TestBed.configureTestingModule({
      imports: [CodeSnippetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeSnippetsComponent);
    component = fixture.componentInstance;
    component.header = 'Header';
    component.snippets = {
      fileName: 'example.ts',
      content: 'const x = 1;',
      language: 'typescript',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
