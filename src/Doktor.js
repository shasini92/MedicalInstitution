import { Pacijent } from "./Pacijent";
import { Pregled } from "./PregledFactory";

export class Doktor {
  static doktori = [];
  constructor(ime, prezime, specijalnost) {
    this.ime = ime;
    this.prezime = prezime;
    this.specijalnost = specijalnost;
    this.pacijenti = [];
    this.datumKreiranja = new Date(Date.now()).toLocaleString();
    console.log(`[${this.datumKreiranja}] Doktor ${ime} kreiran.`);
  }

  zakaziPregled(pacijent, tipPregleda, datum, vrijeme) {
    let pregled = Pregled(tipPregleda, datum, vrijeme);
    pacijent.dobijaPregled(pregled);
  }

  dobijaPacijenta(pacijent) {
    this.pacijenti.push(pacijent);
  }
}
