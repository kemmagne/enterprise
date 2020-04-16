
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  unitaire: number;
  position: number;
  weight: number;
 
  reduction: number;
  prix: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Chocolat', unitaire:30000,  weight: 30, reduction: 30, prix: 25000, action: 3},


];


@Component({
  selector: 'app-quanditaitive',
  templateUrl: './quanditaitive.component.html',
  styleUrls: ['./quanditaitive.component.css']
})
export class QuanditaitiveComponent implements OnInit {


    displayedColumns: string[] = ['position', 'name', 'unitaire', 'weight', 'reduction', 'prix', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    ngOnInit() {  
    }
  }
  