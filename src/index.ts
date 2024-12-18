import { CalcularISR } from "./types";
import tablaISR from "./tablasISR";

function calcularISR({ frecuencia, sueldo }: CalcularISR) {
  if (frecuencia !== "mensual")
    throw Error("Unicamente el calculo mensual ha sido implementado.");
  const tablaDeCalculoISR = tablaISR[frecuencia];
  const tramo = tablaDeCalculoISR.tabla.find(
    (rango) => rango.desde <= sueldo && rango.hasta >= sueldo
  );
  if (tramo) {
    const cuotaFija = tramo?.cuotaFija || 0;
    const cuotaVariable =
      (sueldo - (tramo?.sobreExceso || 0)) * (tramo.porcentaje || 0);
    const totalImpuesto = cuotaFija + cuotaVariable;
    return parseFloat(totalImpuesto.toString()).toFixed(2);
  }
  return 0;
}

export default calcularISR;

// console.log("Calcular:", calcularISR({ frecuencia: "mensual", sueldo: 500 }));
// console.log("Calcular:", calcularISR({ frecuencia: "mensual", sueldo: 1000 }));
