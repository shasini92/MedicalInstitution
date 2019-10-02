import { LaboratorijskiPregled } from "LaboratorijskiPregled";

export class NivoSecera extends LaboratorijskiPregled {
  constructor(datum, vrijeme) {
    super(datum, vrijeme);
    this.vrednost = this.getRandomNumber(60, 140);
    this.vremeObroka = new Date().setDate(today.getDate() - 1);
  }
  today = new Date();
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
