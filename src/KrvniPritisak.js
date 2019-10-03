import { LaboratorijskiPregled } from "./LaboratorijskiPregled.js";

export class KrvniPritisak extends LaboratorijskiPregled {
  constructor(vrijemePregleda) {
    super(vrijemePregleda);
    this.puls = this.getRandomNumber(60, 100);
    this.gornjiPritisak = this.getRandomNumber(120, 160);
    this.donjiPritisak = this.getRandomNumber(60, 100);
    this.imePregleda = "Mjerenje krvnog pritiska.";
  }

  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
