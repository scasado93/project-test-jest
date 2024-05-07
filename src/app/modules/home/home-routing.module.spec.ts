import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';

describe('HomeRoutingModule', () => {
  const routes: Routes = [{ path: '', component: HomeComponent }];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot(routes), HomeRoutingModule]
  }));

  it('should be created', () => {
    const service: HomeRoutingModule = TestBed.inject(HomeRoutingModule);
    expect(service).toBeTruthy();
  });

});
