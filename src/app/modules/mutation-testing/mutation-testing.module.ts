import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MutationTestingRoutingModule } from './mutation-testing-routing.module';
import { GoodTestsComponent } from './components/good-tests/good-tests.component';
import { BadTestsComponent } from './components/bad-tests/bad-tests.component';


@NgModule({
  declarations: [
    BadTestsComponent,
    GoodTestsComponent
  ],
  imports: [
    CommonModule,
    MutationTestingRoutingModule
  ]
})
export class MutationTestingModule { }
