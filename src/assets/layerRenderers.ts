import { permukiman } from "./symbols/permukiman";
import { polaRuang } from "./symbols/polaRuang";
import { jaringanTransportasi } from "./symbols/jaringanTransportasi";
import { infrastrukturTransportasi } from "./symbols/infrastrukturTransportasi";
import { jaringanEnergi } from "./symbols/jaringanEnergi";
import { infrastrukturEnergi } from "./symbols/infrastrukturEnergi";
import { infrastrukturTelekomunikasi } from "./symbols/infrastrukturTelekomunikasi";
import { jaringanSumberDayaAir } from "./symbols/jaringanSumberDayaAir";
import { infrastrukturSumberDayaAir } from "./symbols/infrastrukturSumberDayaAir";
import { jaringanPrasaranaLain } from "./symbols/jaringanPrasaranaLain";
import { infrastrukturPrasaranaLain } from "./symbols/infrastrukturPrasaranaLain";

export const rendererSymbols: {
  [layerId: string]: object;
} = {
  pola: polaRuang,
  permukiman: permukiman,
  jaringanTransportasi: jaringanTransportasi,
  infrastrukturTransportasi: infrastrukturTransportasi,
  jaringanEnergi: jaringanEnergi,
  infrastrukturEnergi: infrastrukturEnergi,
  infrastrukturTelekomunikasi: infrastrukturTelekomunikasi,
  jaringanSumberDayaAir: jaringanSumberDayaAir,
  infrastrukturSumberDayaAir: infrastrukturSumberDayaAir,
  jaringanPrasaranaLain: jaringanPrasaranaLain,
  infrastrukturPrasaranaLain: infrastrukturPrasaranaLain,
};
