import { TablaRetencion, Frecuencia } from "./types";

const tablaMensual: TablaRetencion = {
  frecuencia: "mensual",
  tabla: [
    { desde: 0, hasta: 472, porcentaje: 0, cuotaFija: 0 },
    {
      desde: 472.01,
      hasta: 895.24,
      porcentaje: 0.1,
      sobreExceso: 472,
      cuotaFija: 17.67,
    },
    {
      desde: 895.25,
      hasta: 2038.1,
      porcentaje: 0.2,
      sobreExceso: 895.24,
      cuotaFija: 60,
    },
    {
      desde: 2038.11,
      hasta: 0,
      enAdelante: true,
      porcentaje: 0.3,
      sobreExceso: 2038.1,
      cuotaFija: 288.57,
    },
  ],
};

export default {
  mensual: tablaMensual,
};
