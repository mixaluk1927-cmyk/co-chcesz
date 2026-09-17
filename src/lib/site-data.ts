import duckImage from "@/assets/kaczka-pekinska.jpg";
import chickenImage from "@/assets/kurczak-z-grilla.jpg";
import saladImage from "@/assets/salatka-sezonowa.jpg";
import soupImage from "@/assets/zupa-dnia.jpg";

export const telefonWidoczny = "+48 792 697 582";
export const telefon = "+48792697582";
export const whatsapp = `https://wa.me/48792697582`;

export const dania = [
  {
    nazwa: "Kaczka po pekińsku",
    opis: "Chrupiąca kaczka z sosem hoisin",
    cena: "89 zł",
    obraz: duckImage,
    alt: "Kaczka po pekińsku z naleśnikami i sosem hoisin",
  },
  {
    nazwa: "Kurczak z grilla",
    opis: "Soczysty kurczak z ziołami",
    cena: "49 zł",
    obraz: chickenImage,
    alt: "Soczysty kurczak z grilla z ziołami i cytryną",
  },
  {
    nazwa: "Sałatka sezonowa",
    opis: "Świeża sałatka sezonowa",
    cena: "29 zł",
    obraz: saladImage,
    alt: "Kolorowa sałatka sezonowa ze świeżych warzyw",
  },
  {
    nazwa: "Zupa dnia",
    opis: "Świeża zupa dnia",
    cena: "19 zł",
    obraz: soupImage,
    alt: "Świeża pomidorowa zupa dnia ze śmietanką i ziołami",
  },
] as const;