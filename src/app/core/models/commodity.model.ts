export interface CommoditySpecification {
  readonly label: string;
  readonly value: string;
}

export interface Commodity {
  readonly id: string;
  readonly name: string;
  readonly category:
    | 'Cocoa'
    | 'Fruit'
    | 'Grains'
    | 'Industrial crops'
    | 'Oilseeds'
    | 'Oils & fats'
    | 'Roots & tubers'
    | 'Spices'
    | 'Spices & botanicals';
  readonly origin: string;
  readonly description: string;
  readonly image: string;
  readonly imageCredit?: {
    readonly source: string;
    readonly author: string;
    readonly authorUrl: string;
    readonly license: string;
  };
  readonly packaging: readonly string[];
  readonly minimumOrder: string;
  readonly specifications: readonly CommoditySpecification[];
  readonly tags: readonly string[];
}
