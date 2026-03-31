import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightLoader } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { FakeMediaMatcherProvider } from './test-utils';

describe(AppComponent.name, () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.overrideComponent(AppComponent, {
      set: {
        template: '',
      },
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        FakeMediaMatcherProvider,
        {
          provide: HighlightLoader,
          useValue: {
            setTheme: () => undefined,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
