import { Component } from '@angular/core';
import { Estudiante } from '../models/estudiantes.model';
import { EstudiantesService } from '../services/estudiantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  standalone: false,
  templateUrl: './estudiantes.html',
  styleUrl: './estudiantes.css'
})
export class Estudiantes {

  estudiantes: Array<Estudiante> = [];

  constructor(private estudiantesService: EstudiantesService, private router: Router) { }

  ngOnInit(): void {
    this.estudiantesService.getAllEstudiantes().subscribe({
      next: (data) => {
        console.log(data);
        this.estudiantes = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  listarPagosDeEstudiante(estudiante: Estudiante) {
    this.router.navigateByUrl(`/admin/estudiante-detalle/${estudiante.codigo}`);
  }

}
