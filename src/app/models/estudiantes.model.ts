export interface Estudiante {
  id: number;
  codigo: string;
  nombre: string;
  apellido: string;
  progamaId: string;
  foto: string;
}

export interface Pago {
  id: number;
  fecha: string;
  cantidad: number;
  type: string;
  status: string;
  file: string;
  estudiante: Estudiante;
}

export enum PaymentType {
  EFECTIVO = 0,
  CHEQUE = 1,
  TRANSFERENCIA = 2,
  DEPOSITO = 3
}

export enum PaymentStatus {
  PENDIENTE = 0,
  APROBADO = 1,
  RECHAZADO = 2
}
