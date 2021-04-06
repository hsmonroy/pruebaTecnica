export interface dataOffers {
    versions: OffersVersion[];
    id:       string;
    href:     string;
}

export interface OffersVersion {
    characteristics:        Characteristic[];
    productOfferingPrices?: ProductOfferingPrice[];
    name:                   string;
    id:                     string;
}

export interface Characteristic {
    versions: CharacteristicVersion[];
    id:       string;
}

export interface CharacteristicVersion {
    name:                    string;
    id:                      string;
}

export interface ProductOfferingPrice {
    versions: versions[];
    id:       PlaIDEnum;
}

export enum PlaIDEnum {
    CTTecPrecioBaseOTC = "CT_TecPrecioBaseOTC",
    CTTecPromocionFueraPrecioBaseOT = "CT_TecPromocionFueraPrecioBaseOT",
    CTTecPromocionPrecioBaseOTCD = "CT_TecPromocionPrecioBaseOTCD",
    CTTecTaxIVA = "CT_TecTaxIVA",
}

export enum Name {
    DescuentofueroPrecioBaseTecnologia = "DescuentofueroPrecioBaseTecnologia",
    IVATecnologia = "IVA Tecnologia",
    PrecioBaseTecnologia = "PrecioBaseTecnologia",
    PromocionPrecioBaseTecnologia = "PromocionPrecioBaseTecnologia",
}

export enum Code {
    Cop = "COP",
}

export interface versions {
    price:            Price;
    name:             Name;
}

export interface Units {
    code: Code;
    name: Code;
}

export interface Price {
    amount: number;
    units:  Units;
}