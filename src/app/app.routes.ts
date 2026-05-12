import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { 
    path: 'form', 
    component: FormComponent,
    children: [
      { path: 'template-driven', component: TemplateDrivenFormComponent },
      { path: 'reactive', component: ReactiveFormComponent },
      { path: '', redirectTo: 'template-driven', pathMatch: 'full' }
    ]
  }
];
