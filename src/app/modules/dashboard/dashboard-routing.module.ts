import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '', component: DashboardViewComponent, children: [
      { path: 'ADMIN', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
      { path: 'CRM', loadChildren: () => import('../crm/crm.module').then(c => c.CRMModule) },
      { path: 'OE', loadChildren: () => import('../oe/oe.module').then(c => c.OEModule) }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
