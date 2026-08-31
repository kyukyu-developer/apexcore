import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { SolutionsComponent } from './solutions.component';

const routes: Routes = [{ path: '', component: SolutionsComponent }];

@NgModule({
  declarations: [SolutionsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class SolutionsModule {}
