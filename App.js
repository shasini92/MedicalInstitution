import { Doktor } from "Doktor";
import { Pacijent } from "Pacijent";
import { KrvniPritisak } from "KrvniPritisak";
import { NivoHolesterola } from "NivoHolesterola";
import { NivoSecera } from "NivoSecera";

let Milan = new Doktor("Milan", "Ilic", "Interna Medicina");
let Dragan = new Pacijent("Dragan", "Petrovic", 1309992182813, 145);

function main() {
  console.log(Milan);
  console.log(Dragan);
}

main();
