import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { routing } from './app-routing.module';
/*import { AppRoutingModule } from './app-routing.module';*/
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatButtonModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EntrepriseProfileComponent } from './entreprise-profile/entreprise-profile.component';
import { MarcherComponent } from './marcher/marcher.component';
import { CanneauxComponent } from './canneaux/canneaux.component';
import { ProduitsComponent } from './produits/produits.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PeriodiqueComponent } from './promotion/periodique/periodique.component';
import { QuanditaitiveComponent } from './promotion/quanditaitive/quanditaitive.component';
import { QualitativeComponent } from './promotion/qualitative/qualitative.component';




import { PromotionsComponent } from './promotions/promotions.component';
import { QuanditativeComponent } from './promotions/quanditative/quanditative.component';
import { QualitativesComponent } from './promotions/qualitatives/qualitatives.component';
import { PeriodiquesComponent } from './promotions/periodiques/periodiques.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MarchersPComponent } from './marcher/marchers-p/marchers-p.component';
import { MarchersCComponent } from './marcher/marchers-c/marchers-c.component';
import { ProduitsPComponent } from './produits/produits-p/produits-p.component';
import { ProduitsCComponent } from './produits/produits-c/produits-c.component';
import { CanneauxPComponent } from './canneaux/canneaux-p/canneaux-p.component';
import { CanneauxCComponent } from './canneaux/canneaux-c/canneaux-c.component';
import { AdminComponent } from './home/admin/admin.component';
import { ComerciauxComponent } from './home/comerciaux/comerciaux.component';
import { ContComponent } from './home/cont/cont.component';
import { SuperAdminComponent } from './home/super-admin/super-admin.component';
import { FooterComponent } from './home/footer/footer.component';
import { FootComponent } from './home/foot/foot.component';
import { GeoadminComponent } from './geoadmin/geoadmin.component';
import { GeoadminProfileComponent } from './geoadmin-profile/geoadmin-profile.component';
import { SinginComponent } from './singin/singin.component';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    EntrepriseComponent,
    EntrepriseProfileComponent,
    MarcherComponent,
    CanneauxComponent,
    ProduitsComponent,
    PromotionComponent,
    PeriodiqueComponent,
    QuanditaitiveComponent,
    QualitativeComponent,
    PromotionsComponent,
    QuanditativeComponent,
    QualitativesComponent,
    PeriodiquesComponent,
    ChildComponent,
    ParentComponent,
    MarchersPComponent,
    MarchersCComponent,
    ProduitsPComponent,
    ProduitsCComponent,
    CanneauxPComponent,
    CanneauxCComponent,

    AdminComponent,
    ComerciauxComponent,
    ContComponent,
    SuperAdminComponent,
    FooterComponent,
    FootComponent,
    GeoadminComponent,
    GeoadminProfileComponent,
    SinginComponent,

   // FormsModule,

  ],


  imports: [
    BrowserModule,
    routing,
   /* AppRoutingModule,*/
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  entryComponents: [ChildComponent,  MarchersCComponent, ProduitsCComponent, CanneauxCComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
