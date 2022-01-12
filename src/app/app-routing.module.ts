import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from "./skills/skills.component";
import {EducationComponent} from "./education/education.component";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
