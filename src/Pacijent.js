export class Pacijent {
  constructor(ime, prezime, jmbg, brojKartona) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
    this.pregledi = [];
  }

  biraDoktora(doktor) {
    this.doktor = doktor;
    // Doktor.dobijaPacijenta(doktor, this.ime);
  }

  static dobijaPregled(pacijent, pregled) {
    pacijent.pregledi.push(pregled);
  }

  obaviPregled(pregled) {
    console.log("Pregled obavljen" + preged);
  }

  obaviSvePreglede() {
    this.pregledi.forEach(this.obaviPregled());
  }
}
