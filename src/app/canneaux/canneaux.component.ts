
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  ville: string;
  territoire: string;
  position: number;
  marche: string;
  symbol: string;
  description: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, ville: 'douala', territoire: 'grossite', marche: 'douala', symbol: 'H', description: 'produit resitant', action: ''},
  {position: 2, ville: 'yaounde',  territoire: 'grossite', marche: 'yaounde', symbol: 'He', description: 'produit resitant', action: 'd'},
  {position: 3, ville: 'ebolova',  territoire: 'grossite', marche: 'ebolova', symbol: 'Li', description: 'produit resitant', action: 'd'},
  {position: 4, ville: 'baffousam',  territoire: 'grossite', marche: 'baffous', symbol: 'Be', description: 'produit resitant', action: ''},
  {position: 5, ville: 'maroua',  territoire: 'grossite', marche: 'maroua', symbol: 'B', description: 'produit resitant', action: 'd'},
  {position: 6, ville: 'Garoua',  territoire: 'grossite', marche: 'Garoua', symbol: 'C', description: 'produit resitant', action: 'd'},
  {position: 7, ville: 'admaou',  territoire: 'grossite', marche: 'admaoua', symbol: 'N', description: 'produit resitant', action: 'd'},
  {position: 8, ville: 'limbe',  territoire: 'grossite',  marche: 'limbe', symbol: 'O', description: 'produit resitant', action: 'd'},
  {position: 9, ville: 'buea',  territoire: 'grossite', marche: 'buea', symbol: 'F', description: 'produit resitant', action: 'd'},
  {position: 10, ville: 'bamenda',  territoire: 'grossite', marche: 'bamenda', symbol: 'Ne', description: 'produit resitant', action: 'd'},
];


@Component({
  selector: 'app-canneaux',
  templateUrl: './canneaux.component.html',
  styleUrls: ['./canneaux.component.css']
})
export class CanneauxComponent implements OnInit {



    displayedColumns: string[] = ['position', 'ville', 'territoire', 'marche', 'symbol', 'description', 'action'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);


    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }





    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }
  }
