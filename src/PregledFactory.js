import { KrvniPritisak } from "./KrvniPritisak";
import { NivoHolesterola } from "./NivoHolesterola";
import { NivoSecera } from "./NivoSecera";

export function Pregled(tipPregleda, vrijemePregleda) {
  switch (tipPregleda) {
    case "KrvniPritisak":
      return new KrvniPritisak(vrijemePregleda);
    case "NivoHolesterola":
      return new NivoHolesterola(vrijemePregleda);
    case "NivoSecera":
      return new NivoSecera(vrijemePregleda);
  }
}
