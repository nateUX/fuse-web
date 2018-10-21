import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent }      from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { PopupsComponent } from './popups/popups.component';
import { TypographyComponent } from './typography/typography.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'popups', component: PopupsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'layout', component: LayoutComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}