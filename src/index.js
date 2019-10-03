import { Doktor } from "./Doktor.js";
import { Pacijent } from "./Pacijent.js";

let Milan = new Doktor("Milan", "Ilic", "Interna Medicina");
let Dragan = new Pacijent("Dragan", "Petrovic", 1309992182813, 145);

function main() {
  Dragan.biraDoktora(Milan);
  Milan.zakaziPregled(
    Dragan,
    "KrvniPritisak",
    new Date(2019, 5, 10, 12, 30, 0)
  );
  Milan.zakaziPregled(Dragan, "NivoSecera", new Date(2019, 5, 10, 12, 45, 0));

  Dragan.obaviSvePreglede();
}

main();
