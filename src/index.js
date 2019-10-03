import { Doktor } from "./Doktor.js";
import { Pacijent } from "./Pacijent.js";
// import { KrvniPritisak } from "./KrvniPritisak.js";
// import { NivoHolesterola } from "./NivoHolesterola.js";
// import { NivoSecera } from "./NivoSecera.js";

let Milan = new Doktor("Milan", "Ilic", "Interna Medicina");
let Dragan = new Pacijent("Dragan", "Petrovic", 1309992182813, 145);

function main() {
  console.log(Milan);
  console.log(Dragan);
}

main();
