import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PayToolComponent} from "./pay-tool/pay-tool.component";

const routes: Routes = [
  {
    path: 'pay-tool',
    component: PayToolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
