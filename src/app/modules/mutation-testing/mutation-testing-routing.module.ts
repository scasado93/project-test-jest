import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodTestsComponent } from './components/good-tests/good-tests.component';
import { BadTestsComponent } from './components/bad-tests/bad-tests.component';

const routes: Routes = [
  { path: '', component: GoodTestsComponent },
  { path: 'bad-tests', component: BadTestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MutationTestingRoutingModule {}
