import { LaboratorijskiPregled } from "./LaboratorijskiPregled.js";

export class NivoHolesterola extends LaboratorijskiPregled {
  constructor(vrijemePregleda) {
    super(vrijemePregleda);
    this.vrednost = this.getRandomNumber(100, 280);
    this.vremeObroka = new Date(vrijemePregleda - 24 * 60 * 60 * 1000);
    this.imePregleda = "Mjerenje nivoa holesterola.";
  }
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
