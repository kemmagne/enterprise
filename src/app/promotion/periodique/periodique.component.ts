
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  unitaire: number;
  position: number;
  weight: number;
  symbol: string;
  reduction: number;
  prix: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Chocolat', unitaire:30000,  weight: 1.0079, symbol: 'H', reduction: 3, prix: 25000, action: 3},


];


@Component({
  selector: 'app-periodique',
  templateUrl: './periodique.component.html',
  styleUrls: ['./periodique.component.css']
})
export class PeriodiqueComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'unitaire', 'weight', 'symbol',  'reduction', 'prix', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {  
  }
}

