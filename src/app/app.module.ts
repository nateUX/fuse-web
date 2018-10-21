import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ThemeService } from './core/services/theme.service';


// import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule,
// } from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { PopupsComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog, PizzaPartyComponent } from './popups/popups.component';
import { TypographyComponent } from './typography/typography.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  entryComponents: [BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog, PizzaPartyComponent],
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    FormsComponent,
    PopupsComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    TypographyComponent,
    DataTableComponent,
    LayoutComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, 
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
