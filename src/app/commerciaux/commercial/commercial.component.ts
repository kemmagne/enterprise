import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', description:'produit resitant', action: 'delete'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', description:'produit resitant', action: 'delete'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' ,description:'produit resitant', action: 'delete'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', description:'produit resitant', action: 'delete'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B' ,description:'produit resitant', action: 'delete'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', description:'produit resitant', action: 'delete'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', description:'produit resitant', action: 'delete'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', description:'produit resitant', action: 'delete'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', description:'produit resitant', action: 'delete'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', description:'produit resitant', action: 'delete'},
];


@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {



  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }





  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}



