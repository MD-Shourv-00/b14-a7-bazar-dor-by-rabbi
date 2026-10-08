export interface CategoryType {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

export type PriceDirection = "up" | "down" | "flat";

export interface PriceChange {
    dir: PriceDirection;
    pct: number;
}

export interface MarketPrice {
    market: string;
    division: string;
    min: number;
    max: number;
}

export interface ProductPriceData {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: PriceChange;
    markets: MarketPrice[];
}