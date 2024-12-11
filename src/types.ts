export type Frecuencia = "mensual" | "semanal" | "quincenal";

export type Tramo = {
  desde: number;
  hasta: number;
  enAdelante?: boolean;
  porcentaje?: number;
  sobreExceso?: number;
  cuotaFija: number;
};

export type TablaRetencion = {
  frecuencia: Frecuencia;
  tabla: Tramo[];
};

export type CalcularISR = {
  frecuencia: Frecuencia;
  sueldo: number;
};
