import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { BadTestsComponent } from './components/bad-tests/bad-tests.component';
import { GoodTestsComponent } from './components/good-tests/good-tests.component';
import { MutationTestingRoutingModule } from './mutation-testing-routing.module';

describe('MutationTestingRoutingModule', () => {
  const routes: Routes = [
    { path: '', component: GoodTestsComponent },
    { path: 'bad-tests', component: BadTestsComponent },
  ];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot(routes), MutationTestingRoutingModule]
  }));

  it('should be created', () => {
    const service: MutationTestingRoutingModule = TestBed.inject(MutationTestingRoutingModule);
    expect(service).toBeTruthy();
  });

});
