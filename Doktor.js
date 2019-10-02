export class Doktor {
  constructor(ime, prezime, specijalnost) {
    this.ime = ime;
    this.prezime = prezime;
    this.specijalnost = specijalnost;
    this.pacijenti = [];
  }

  zakaziPregled(pacijent, pregled, datum, vrijeme) {}

  static dobijaPacijenta(imeDoktora, imePacijenta) {
    imeDoktora.pacijenti.push(imePacijenta);
  }
}
