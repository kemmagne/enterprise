import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(
    private matDialog : MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(){
    this.matDialog.open(ChildComponent, {
      width:'500px'
    })
  }

}
