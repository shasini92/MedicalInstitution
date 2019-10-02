import { LaboratorijskiPregled } from "LaboratorijskiPregled";

export class NivoHolesterola extends LaboratorijskiPregled {
  constructor(datum, vrijeme) {
    super(datum, vrijeme);
    this.vrednost = this.getRandomNumber(100, 280);
    this.vremeObroka = new Date().setDate(today.getDate() - 1);
  }
  today = new Date();
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
