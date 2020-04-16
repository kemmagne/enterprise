import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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



import { GeoadminComponent } from './geoadmin/geoadmin.component';
import { GeoadminProfileComponent } from './geoadmin-profile/geoadmin-profile.component';








/***
 *
 *For the Home page
 */

import { AdminComponent } from './home/admin/admin.component';
import { ComerciauxComponent } from './home/comerciaux/comerciaux.component';
import { ContComponent } from './home/cont/cont.component';
import { SuperAdminComponent } from './home/super-admin/super-admin.component';
import { FooterComponent } from './home/footer/footer.component';
import { FootComponent } from './home/foot/foot.component';

import { SinginComponent } from './singin/singin.component';


 /**
  *
  * FIN de la Home page
  */


const routes: Routes = [
  {path: '', component: HomeComponent,

  children: [
    {
     path:  'admin',
     component:  AdminComponent,
    },

    {
      path:  'super',
      component:  SuperAdminComponent,
     },

     {
      path:  'commerciaux',
      component:  ComerciauxComponent,
     },

     {
      path:  'controllleur',
      component: ContComponent,
     },

     {
      path:  'footer',
      component: FooterComponent,
     },


     {
      path:  'foot',
      component:  FootComponent,
     },

  ]

},

{path: 'geoadmin', component: GeoadminComponent},
{path: 'geoadmins', component: GeoadminProfileComponent},
{path: 'signin', component: SinginComponent},

{path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'entreprises', component: EntrepriseProfileComponent},
  {path: 'marches', component: MarcherComponent},
  {path: 'canneaux', component: CanneauxComponent},
  {path: 'produits', component: ProduitsComponent},
  {path: 'promotion', component: PromotionComponent,
      children: [
          {
           path:  'periodique',
           component:  PeriodiqueComponent,
          },

          {
            path:  'quanditative',
            component: QuanditaitiveComponent,
           },
           {
            path:  'qualitative',
            component: QualitativeComponent,
           },

  ]

  },


  {path: 'promotions', component: PromotionsComponent,
  children: [
      {
       path:  'periodique',
       component:  PeriodiquesComponent,
      },

      {
        path:  'quanditative',
        component: QuanditativeComponent,
       },
       {
        path:  'qualitative',
        component: QualitativesComponent,
       },
    ]
  },

  { path: 'administrateur',
  loadChildren: () => import('./administrateurs/administrateurs.module').then(m => m.AdministrateursModule)
},

{ path: 'controlleur',
loadChildren: () => import('./controlleurs/controlleurs.module').then(m => m.ControlleursModule)
},

{ path: 'commerce',
loadChildren: () => import('./commerciaux/commerciaux.module').then(m => m.CommerciauxModule)
},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
