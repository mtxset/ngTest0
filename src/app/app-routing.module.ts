import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComp } from './tasks/tasks.comp';
import { HideThemAllComponent } from './tasks/hide-them-all/hide-them-all.component';
import { ContProjMultiComponent } from './tasks/cont-proj-multi/cont-proj-multi.component';
import { ContProjectionComponent } from './tasks/cont-projection/cont-projection.component';
import { NgChildVarsComponent } from './tasks/ng-child-vars/ng-child-vars.component';
import { NgOutputComponent } from './tasks/ng-output/ng-output.component';
import { NgInputComponent } from './tasks/ng-input/ng-input.component';
import { BindingExComp } from './tasks/binding/comp';
import { NgForComponent } from './tasks/ng-for/ng-for.component';
import { NgForAndIfComponent } from './tasks/ng-for-and-if/ng-for-and-if.comp';
import { NgForHiddenComp } from './tasks/ng-for-hidden/ng-for-hidden.comp';
import { NgSwitchExComp } from './tasks/ngSwitch/ngSwitch.comp';
import { NgClassExComp } from './tasks/ngClass/ngClasss.comp';
import { NgStyleExComp } from './tasks/ngStyle/ngStyle.comp';

const routes: Routes =
[
  { path: '', component: HideThemAllComponent},
  { path: 'tasks-hide-them', component: HideThemAllComponent},
  { path: 'cont-proj-multi', component: ContProjMultiComponent},
  { path: 'cont-projection', component: ContProjectionComponent},
  { path: 'ng-child-vars', component: NgChildVarsComponent},
  { path: 'ng-output', component: NgOutputComponent},
  { path: 'ng-input', component: NgInputComponent},
  { path: 'binding', component: BindingExComp},
  { path: 'ngFor', component: NgForComponent},
  { path: 'ngFor-ngIf', component: NgForAndIfComponent},
  { path: 'ngFor-hidden', component: NgForHiddenComp},
  { path: 'ngSwitch', component: NgSwitchExComp},
  { path: 'ngClass', component: NgClassExComp},
  { path: 'ngStyle', component: NgStyleExComp},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
