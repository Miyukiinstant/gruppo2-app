import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GroupComponent } from './components/group/group.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AppartamentiComponent } from './components/tables/appartamenti/appartamenti.component';
import { AmministratoreComponent } from './components/tables/amministratore/amministratore.component';
import { ContrattoComponent } from './components/tables/contratto/contratto.component';
import { PalazzoComponent } from './components/tables/palazzo/palazzo.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CercaAmmComponent } from './components/tables/search/cerca-amm/cerca-amm.component';
import { NumPalazComponent } from './components/tables/search/num-palaz/num-palaz.component';




@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    GroupComponent,
    AdminComponent,
    AppartamentiComponent,
    AmministratoreComponent,
    ContrattoComponent,
    PalazzoComponent,
    CercaAmmComponent,
    NumPalazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule

    
  ],
  providers: [
    {provide:MAT_DATE_LOCALE,useValue:"it-IT"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
