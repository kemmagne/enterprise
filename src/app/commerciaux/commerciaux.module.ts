import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommerciauxComponent } from './commerciaux.component';
import { MaterialModule} from '../material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommerciauxprofileComponent } from './commerciauxprofile/commerciauxprofile.component';
import { CommerciauxnameComponent } from './commerciauxname/commerciauxname.component';
import { CommerciauxlistComponent } from './commerciauxlist/commerciauxlist.component';
import { CommerciauxcompleteComponent } from './commerciauxcomplete/commerciauxcomplete.component';
import { CommercialComponent } from './commercial/commercial.component';


const routes: Routes = [


  {path: 'commerciaux', component: CommerciauxComponent,
  children: [
      {
       path:  'commerciauxprofile',
       component:   CommerciauxprofileComponent
      },

      {
        path:  'commerciauxname',
        component:  CommerciauxnameComponent
       },
       {
        path:  'commerciauxcomplete',
        component: CommerciauxcompleteComponent
       },

       {
         path:
         'commerciauxlist',
           component: CommerciauxlistComponent
      },
      {
        path:
        'commercial',
          component: CommercialComponent
     },
    ]
  },
];


@NgModule({
  declarations: [
    CommerciauxComponent,
    CommerciauxlistComponent,
    CommerciauxprofileComponent,
    CommerciauxnameComponent,
    CommerciauxcompleteComponent,
    CommercialComponent,

    ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class CommerciauxModule { }
