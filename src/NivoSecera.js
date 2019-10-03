import { LaboratorijskiPregled } from "./LaboratorijskiPregled.js";

export class NivoSecera extends LaboratorijskiPregled {
  constructor(vrijemePregleda) {
    super(vrijemePregleda);
    this.vrednost = this.getRandomNumber(60, 140);
    this.vremeObroka = new Date(vrijemePregleda - 24 * 60 * 60 * 1000);
    this.imePregleda = "Mjerenje secera u krvi.";
  }
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
