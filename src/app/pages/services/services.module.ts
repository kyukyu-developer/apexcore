import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ServicesListComponent } from './services-list.component';
import { ServiceDetailComponent } from './service-detail.component';

const routes: Routes = [
  { path: '',    component: ServicesListComponent },
  { path: ':id', component: ServiceDetailComponent },
];

@NgModule({
  declarations: [ServicesListComponent, ServiceDetailComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ServicesModule {}
