import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlleursComponent } from './controlleurs.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NameComponent } from './name/name.component';
import { ListComponent } from './list/list.component';
import { CompleteComponent } from './complete/complete.component';
import { ControlleurComponent } from './controlleur/controlleur.component';



const routes: Routes = [
  /*  {path: 'adcompo', component: AdministrateursComponent },*/


    {path: 'controlleur', component: ControlleursComponent,

    children: [
        {
         path:  'controlleurlist',
         component:  ListComponent,
        },

     {
          path:  'controlleurname',
          component: NameComponent ,
         },
         {
          path:  'controlleurcomplete',
          component: CompleteComponent,
         },

         {
          path:  'controlleurprofile',
          component:  ProfileComponent,
         },

         {
          path:  'controlleur',
          component:  ControlleurComponent,
         },


      ]
    },
];



@NgModule({
  declarations: [ControlleursComponent, ProfileComponent, NameComponent, ListComponent, CompleteComponent, ControlleurComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ControlleursModule { }
