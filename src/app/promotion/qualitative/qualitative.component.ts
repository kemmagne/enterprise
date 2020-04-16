
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  unitaire: number;
  quandite: number;
  position: number;
  weight: number;
  symbol: string
  reduction: number;
  prix: number;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Chocolat', unitaire:30000, quandite:10,   weight: 30, symbol: 'az', reduction: 30, prix: 25000, action: 3},


];


@Component({
  selector: 'app-qualitative',
  templateUrl: './qualitative.component.html',
  styleUrls: ['./qualitative.component.css']
})
export class QualitativeComponent implements OnInit {

  

  displayedColumns: string[] = ['position', 'name', 'unitaire', 'quandite', 'weight', 'symbol', 'reduction', 'prix', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {  
  }
}
