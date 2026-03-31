import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

import { NavigationFocusService } from './navigation-focus';
import { RoutedTabsComponent } from './routed-tabs.component';

describe(RoutedTabsComponent.name, () => {
  let component: RoutedTabsComponent;
  let fixture: ComponentFixture<RoutedTabsComponent>;
  let eventSubject: ReplaySubject<unknown>;

  beforeEach(async () => {
    eventSubject = new ReplaySubject<unknown>(1);

    await TestBed.configureTestingModule({
      imports: [RoutedTabsComponent],
      providers: [
        {
          provide: NavigationFocusService,
          useValue: {
            navigationEndEvents: eventSubject.asObservable(),
          },
        },
        {
          provide: GoogleAnalyticsService,
          useValue: {
            event: () => undefined,
          },
        },
        {
          provide: Router,
          useValue: {
            createUrlTree: () => ({ toString: () => '/section' }),
            navigateByUrl: () => Promise.resolve(true),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
            parent: null,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    eventSubject.complete();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
