import { Component } from '@angular/core';
import { Pago } from '../models/estudiantes.model';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../services/estudiantes';

@Component({
  selector: 'app-estudiante-detalle',
  standalone: false,
  templateUrl: './estudiante-detalle.html',
  styleUrl: './estudiante-detalle.css'
})
export class EstudianteDetalle {
  estudianteCodigo!: string;
  pagosEstudiante: Array<Pago> = []
  pagosDataSource!: MatTableDataSource<Pago>;
  nombreEstudiante: string = '';

  public displayedColumns: string[] = ['id', 'fecha', 'cantidad', 'tipo', 'estado', 'nombre'];

  constructor(private activatedRoute: ActivatedRoute, private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    this.estudianteCodigo = this.activatedRoute.snapshot.paramMap.get('codigo')!;
    this.estudiantesService.getPagosByEstudiante(this.estudianteCodigo).subscribe({
      next: (data) => {
        console.log(data);
        this.pagosEstudiante = data;
        this.nombreEstudiante = this.pagosEstudiante[0].estudiante.nombre;
        this.pagosDataSource = new MatTableDataSource<Pago>(this.pagosEstudiante);
      },
      error: (error) => {
        console.log(error);
      }
    }
    );
  }
}
