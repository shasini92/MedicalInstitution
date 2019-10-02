import { LaboratorijskiPregled } from "LaboratorijskiPregled";

export class KrvniPritisak extends LaboratorijskiPregled {
  constructor(datum, vrijeme) {
    super(datum, vrijeme);
    this.puls = this.getRandomNumber(60, 100);
    this.gornjiPritisak = this.getRandomNumber(120, 160);
    this.donjiPritisak = this.getRandomNumber(60, 100);
  }

  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
