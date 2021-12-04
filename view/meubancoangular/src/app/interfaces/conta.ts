import { ICliente } from "./cliente";

export interface IConta {
  agencia: "string",
  cliente: ICliente,
  id: 0,
  numero: "string",
  saldo: 0
}
