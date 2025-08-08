import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EstudiantesService } from '../services/estudiantes';

@Component({
  selector: 'app-pagos',
  standalone: false,
  templateUrl: './pagos.html',
  styleUrl: './pagos.css'
})
export class Pagos {
  public pagos: any;
  public dataSource: any;
  public displayedColumns: string[] = ['id', 'fecha', 'cantidad', 'tipo', 'estado', 'nombre'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private http: HttpClient, private estudianteService: EstudiantesService) { }

  ngOnInit() {
    this.estudianteService.getAllPagos().subscribe({
      next: (data) => {
        this.pagos = data;
        this.dataSource = new MatTableDataSource(this.pagos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
