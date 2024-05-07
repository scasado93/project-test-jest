import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';

describe('AppRoutingModule', () => {
  let router: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        HomeModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideRouter(routes),
        provideLocationMocks()
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  }));

  it('should navigate to a non-existing route and redirect to "home"', async () => {
    await router.navigate(['sample']);
    expect(location.path()).toBe('/home');
  });
});
