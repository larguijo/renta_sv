import { CalcularISR } from "./types";
import tablaISR from "./tablasISR";

function calcularISR({ frecuencia, sueldo }: CalcularISR) {
  if (frecuencia !== "mensual")
    throw Error("Unicamente el calculo mensual ha sido implementado.");
  const tablaDeCalculoISR = tablaISR[frecuencia];
}
