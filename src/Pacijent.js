export class Pacijent {
  constructor(ime, prezime, jmbg, brojKartona) {
    this.ime = ime;
    this.prezime = prezime;
    this.jmbg = jmbg;
    this.brojKartona = brojKartona;
    this.pregledi = [];
    this.datumKreiranja = new Date(Date.now()).toLocaleString();
    console.log(`[${this.datumKreiranja}] Pacijent ${ime} kreiran.`);
  }

  biraDoktora(doktor) {
    this.doktor = doktor;
    doktor.dobijaPacijenta(this.ime);
    console.log(
      `[${new Date(Date.now()).toLocaleString()}] Pacijent ${
        this.ime
      } bira doktora ${doktor.ime}.`
    );
  }

  dobijaPregled(pregled) {
    this.pregledi.push(pregled);
  }

  obaviSvePreglede() {
    this.pregledi.forEach(pregled => {
      console.log(
        `[${pregled.vrijemePregleda.toLocaleString()}]Pregled obavljen: ` +
          pregled.imePregleda
      );
    });
  }
}
