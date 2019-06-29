import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "all-task-comp",
  templateUrl: "./tasks.comp.html",
  styles:
  [`
  /deep/.mat-tab-label, /deep/.mat-tab-label-active{
    min-width: 0!important;
    padding: 3px!important;
    margin: 3px!important;
   }
  `]
})

export class TaskComp
{

  private navLinks: {path: string, label: string}[] =
  [
    { path: 'tasks-hide-them', label: 'directives-hide-them-all'},
    { path: 'cont-proj-multi', label: 'cont-proj-multi'},
    { path: 'cont-projection', label: 'cont-projection'},
    { path: 'ng-child-vars', label: 'ng-child-vars'},
    { path: 'ng-output', label: 'ng-output'},
    { path: 'ng-input', label: 'ng-input'},
    { path: 'binding', label: 'binding'},
    { path: 'ngFor', label: 'ngFor'},
    { path: 'ngFor-ngIf', label: 'ngFor-ngIf'},
    { path: 'ngFor-hidden', label: 'ngFor-hidden'},
    { path: 'ngSwitch', label: 'ngSwitch'},
    { path: 'ngClass', label: 'ngClass'},
    { path: 'ngStyle', label: 'ngStyle'},

  ];
}
