import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent }      from './top-bar/top-bar.component';
import { CalculatorComponent }   from './calculator/calculator.component';
import { HypothesistestComponent }   from './hypothesistest/hypothesistest.component';
import { FirstpageComponent }      from './firstpage/firstpage.component';
import { RocComponent }  from './roc/roc.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'roc', component: RocComponent },
  { path: 'intro', component: FirstpageComponent },
  { path: 'HypothesisTest', component: HypothesistestComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}