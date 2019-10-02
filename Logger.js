class Logger {
    constructor() {
        // Singleton
        if (!Logger.instance) {
            Logger.instance = this;
        }

        return Logger.instance;
    }

    logDodavanje(vocka, kolicinaVoca) {
        console.log(`Dodato voce: ${vocka.naziv}, tezina: ${vocka.tezina}, trenutna kolicina u posudi : ${kolicinaVoca}`);
    }

    logCedjenje(kolicinaSoka) {
        console.log(`Iscedjeno soka: ${kolicinaSoka}`);
    }

    logUkupno(ukupnoSoka) {
        console.log(`Ukupno iscedjeno soka: ${ukupnoSoka}`);
    }
}

export const logger = new Logger;