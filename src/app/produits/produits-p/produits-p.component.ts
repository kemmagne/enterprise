import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { ProduitsCComponent } from '../../produits/produits-c/produits-c.component';



@Component({
  selector: 'app-produits-p',
  templateUrl: './produits-p.component.html',
  styleUrls: ['./produits-p.component.css']
})
export class ProduitsPComponent implements OnInit {

  constructor(
    private matDialog : MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(){

    this.matDialog.open(ProduitsCComponent, {
      width:'500px'
    })
  }

}
