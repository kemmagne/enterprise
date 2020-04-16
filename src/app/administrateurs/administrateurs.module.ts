import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrateursComponent } from './administrateurs.component';


import { MaterialModule} from '../material/material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';
import { AdministrateurlistComponent } from './administrateurlist/administrateurlist.component';
import { AdministrateurnameComponent } from './administrateurname/administrateurname.component';
import { AdministrateurcompletComponent } from './administrateurcomplet/administrateurcomplet.component';
import { AdministrateurprofileComponent } from './administrateurprofile/administrateurprofile.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';


const routes: Routes = [
/*  {path: 'adcompo', component: AdministrateursComponent },*/


  {path: 'adcompo', component: AdministrateursComponent,

  children: [
      {
       path:  'adminliste',
       component:  AdministrateurlistComponent,
      },

      {
        path:  'adminname',
        component: AdministrateurnameComponent ,
       },
       {
        path:  'admincomplete',
        component:  AdministrateurcompletComponent,
       },

       {
        path:  'adminprofile',
        component:  AdministrateurprofileComponent,
       },
       {
        path:  'admin',
        component: AdministrateurComponent,
       },
    ]
  },
];

@NgModule({
  declarations: [
    AdministrateursComponent,
    AdministrateurlistComponent,
    AdministrateurnameComponent,
    AdministrateurcompletComponent,
     AdministrateurprofileComponent,
      AdministrateurComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
     ReactiveFormsModule,
  ]
})
export class AdministrateursModule { }
