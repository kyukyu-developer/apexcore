import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PortfolioModule {}
