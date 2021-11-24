import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes = [
 
      { path: 'home', component: CourseComponent },
      { path: 'dept', component: DepartmentComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
