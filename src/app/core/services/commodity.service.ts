import { Injectable, signal } from '@angular/core';
import { Commodity } from '../models/commodity.model';
import { Enquiry } from '../models/enquiry.model';

const COMMODITIES: readonly Commodity[] = [
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    category: 'Oilseeds',
    origin: 'Northern Nigeria',
    description: 'Cleaned sesame seeds for food and processing.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Jumbo bags on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 10% (buyer-provided guide)' },
      { label: 'Purity', value: '≥ 95% (buyer-provided guide)' },
      { label: 'Oil content', value: '≥ 40% (buyer-provided guide)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Form', value: 'Whole or decorticated' }
    ],
    tags: ['Cleaned options', 'Export packing']
  },
  {
    id: 'cashew-nuts',
    name: 'Cashew Nuts',
    category: 'Oilseeds',
    origin: 'Nigeria',
    description: 'Raw Nigerian cashew nuts. Grades are agreed by order.',
    image: 'assets/images/cashew-nuts.jpg',
    packaging: ['80kg jute bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 8% (indicative, raw nuts)' },
      { label: 'Nut count', value: '170–220 nuts/kg (indicative)' },
      { label: 'Kernel outturn', value: '45–52 lb per 80 kg bag (indicative)' },
      { label: 'Defective nuts', value: '≤ 10% (indicative)' },
      { label: 'Form', value: 'Raw cashew nuts in shell' }
    ],
    tags: ['Raw nuts', 'Seasonal sourcing']
  },
  {
    id: 'ginger',
    name: 'Dried Ginger',
    category: 'Spices',
    origin: 'Nigeria',
    description: 'Dried ginger, available whole or prepared to order.',
    image: 'assets/images/dried-ginger.jpg',
    imageCredit: {
      source: 'https://commons.wikimedia.org/wiki/File:Dried_ginger_rhizome.jpg',
      author: 'Friday musa',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Friday_musa',
      license: 'https://creativecommons.org/licenses/by-sa/4.0/'
    },
    packaging: ['25kg or 50kg bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 10% (indicative)' },
      { label: 'Volatile oil', value: '≥ 1.5 ml/100 g (indicative; test by lot)' },
      { label: 'Total ash', value: '≤ 8% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Form', value: 'Whole, split or sliced; confirm by order' }
    ],
    tags: ['Whole or split', 'Buyer-selected preparation']
  },
  {
    id: 'shea-nuts',
    name: 'Shea Nuts',
    category: 'Oilseeds',
    origin: 'Northern Nigeria',
    description: 'Shea nuts for oil processors and manufacturers.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Oil content', value: 'Approximately 40–50% (indicative)' },
      { label: 'Moisture content', value: '≤ 10% (indicative)' },
      { label: 'Purity', value: '≥ 95% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Form', value: 'Whole or dehulled nuts; confirm by order' }
    ],
    tags: ['Processor supply', 'Bulk availability']
  },
  {
    id: 'maize',
    name: 'Yellow Maize',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Yellow maize for food and animal feed.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk container options'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 13.5% (indicative)' },
      { label: 'Purity', value: '≥ 98% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Damaged/broken kernels', value: '≤ 5% (indicative)' },
      { label: 'Aflatoxin', value: 'Test to destination-market limits' }
    ],
    tags: ['Food or feed grade', 'Seasonal sourcing']
  },
  {
    id: 'dried-cassava',
    name: 'Dried Cassava',
    category: 'Roots & tubers',
    origin: 'Nigeria',
    description: 'Dried cassava for food and industrial use.',
    image: 'assets/images/dried-cassava.jpg',
    packaging: ['50kg PP bags', 'Custom bulk packing'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 14% chips; ≤ 13% flour (indicative)' },
      { label: 'Starch', value: 'Report actual result by product lot' },
      { label: 'Hydrocyanic acid', value: 'For edible flour, target ≤ 10 mg/kg; test required' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Form', value: 'Chips, flour or other agreed format' }
    ],
    tags: ['Industrial supply', 'Custom preparation']
  },
  {
    id: 'cocoa-beans',
    name: 'Cocoa Beans',
    category: 'Cocoa',
    origin: 'Nigeria',
    description: 'Nigerian cocoa beans for chocolate and food makers.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
    packaging: ['60kg jute bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 7.5% (indicative)' },
      { label: 'Fermentation', value: '≥ 70% brown beans in cut test (indicative)' },
      { label: 'Mouldy/slaty beans', value: '≤ 3% each (indicative)' },
      { label: 'Bean count', value: 'Report count per 100 g by lot' },
      { label: 'Form', value: 'Fermented and dried whole beans' }
    ],
    tags: ['Cocoa sourcing', 'Export packing']
  },
  {
    id: 'soya-beans',
    name: 'Soya Beans',
    category: 'Oilseeds',
    origin: 'Nigeria',
    description: 'Soya beans for food, feed and processing.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 13% (indicative)' },
      { label: 'Purity', value: '≥ 98% (indicative)' },
      { label: 'Protein', value: '≥ 35% dry basis (indicative)' },
      { label: 'Oil content', value: '≥ 18% dry basis (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' }
    ],
    tags: ['Food or feed grade', 'Seasonal sourcing']
  },
  {
    id: 'dried-hibiscus-flowers',
    name: 'Dried Hibiscus Flowers (Zobo)',
    category: 'Spices & botanicals',
    origin: 'Nigeria',
    description: 'Dried hibiscus flowers, also known as zobo, for drinks and food.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
    packaging: ['25kg or 50kg bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 12% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Stems and leaves', value: '≤ 5% (indicative)' },
      { label: 'Colour', value: 'Red calyces; grade confirmed by lot' },
      { label: 'Form', value: 'Whole calyces or cut; confirm by order' }
    ],
    tags: ['Beverage ingredient', 'Export packing']
  },
  {
    id: 'sorghum',
    name: 'Sorghum',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Sorghum for food, drinks and animal feed.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 13.5% (indicative)' },
      { label: 'Purity', value: '≥ 98% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Damaged kernels', value: '≤ 5% (indicative)' },
      { label: 'Aflatoxin', value: 'Test to destination-market limits' }
    ],
    tags: ['Food or feed grade', 'Seasonal sourcing']
  },
  {
    id: 'peanuts-groundnuts',
    name: 'Peanuts (Groundnuts)',
    category: 'Oilseeds',
    origin: 'Nigeria',
    description: 'Groundnuts for food, snacks and processing.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 8% shelled; ≤ 9% in shell (indicative)' },
      { label: 'Oil content', value: 'Approximately 40–50% (indicative)' },
      { label: 'Purity', value: '≥ 98% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Aflatoxin', value: 'Test to destination-market limits' }
    ],
    tags: ['Food or processing grade', 'Seasonal sourcing']
  },
  {
    id: 'cassava-products',
    name: 'Cassava Products',
    category: 'Roots & tubers',
    origin: 'Nigeria',
    description: 'Cassava products prepared for food or industrial use.',
    image: 'assets/images/dried-cassava.jpg',
    packaging: ['25kg or 50kg bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Dried chips moisture', value: '≤ 14% (indicative)' },
      { label: 'Flour moisture', value: '≤ 13% (indicative)' },
      { label: 'Edible cassava flour HCN', value: '≤ 10 mg/kg; laboratory test required' },
      { label: 'Starch content', value: 'Measure and report for selected format' },
      { label: 'Product form', value: 'Chips, flour or other agreed format' }
    ],
    tags: ['Food or industrial use', 'Custom preparation']
  },
  {
    id: 'palm-oil-palm-kernel-oil',
    name: 'Palm Oil & Palm Kernel Oil',
    category: 'Oils & fats',
    origin: 'Nigeria',
    description: 'Palm oil and palm kernel oil for food and processing.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=85',
    packaging: ['Food-grade drums', 'Bulk formats on request'],
    minimumOrder: 'To be confirmed by product and packing',
    specifications: [
      { label: 'Free fatty acids (crude palm oil)', value: '≤ 5% as palmitic acid (indicative)' },
      { label: 'Free fatty acids (palm kernel oil)', value: '≤ 5% as lauric acid (indicative)' },
      { label: 'Moisture and impurities', value: '≤ 0.25% (indicative)' },
      { label: 'DOBI (crude palm oil)', value: '≥ 2.3 (indicative)' },
      { label: 'Oil type and colour', value: 'Confirm palm oil or kernel oil by lot' }
    ],
    tags: ['Vegetable oils', 'Bulk supply']
  },
  {
    id: 'chilli-peppers',
    name: 'Chilli Peppers',
    category: 'Spices & botanicals',
    origin: 'Nigeria',
    description: 'Chilli peppers, whole or prepared to order.',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=900&q=85',
    packaging: ['25kg or 50kg bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Form', value: 'Whole or prepared to order' },
      { label: 'Moisture content (dried)', value: '≤ 12% (indicative)' },
      { label: 'Foreign matter', value: '≤ 2% (indicative)' },
      { label: 'Heat level', value: 'Scoville value confirmed by lot' },
      { label: 'Colour', value: 'Test or agree grade by lot' }
    ],
    tags: ['Spice ingredient', 'Custom preparation']
  },
  {
    id: 'yams',
    name: 'Yams',
    category: 'Roots & tubers',
    origin: 'Nigeria',
    description: 'Nigerian yams for food buyers.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85',
    packaging: ['Export cartons or agreed packing'],
    minimumOrder: 'To be confirmed by season and destination',
    specifications: [
      { label: 'Typical tuber weight', value: 'About 1–5 kg; variety and grade dependent' },
      { label: 'Condition', value: 'Firm, sound; free from rot and pest damage' },
      { label: 'Variety', value: 'Confirm by lot' },
      { label: 'Curing and treatment', value: 'Confirm for destination-market rules' },
      { label: 'Export packaging', value: 'Pack and ventilate to destination requirements' }
    ],
    tags: ['Fresh produce', 'Seasonal sourcing']
  },
  {
    id: 'pineapples',
    name: 'Pineapples',
    category: 'Fruit',
    origin: 'Nigeria',
    description: 'Fresh Nigerian pineapples, subject to seasonal availability.',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=85',
    packaging: ['Export cartons', 'Packing agreed to order'],
    minimumOrder: 'To be confirmed by season and destination',
    specifications: [
      { label: 'Soluble solids', value: 'About 12–16 °Brix at maturity (indicative)' },
      { label: 'Typical fruit weight', value: 'About 0.8–2.0 kg; variety dependent' },
      { label: 'Maturity and condition', value: 'Sound fruit; grade agreed by buyer' },
      { label: 'Variety and size', value: 'Confirm by lot' },
      { label: 'Packing', value: 'Export grade cartons; confirm by order' }
    ],
    tags: ['Fresh produce', 'Seasonal sourcing']
  },
  {
    id: 'cotton',
    name: 'Cotton',
    category: 'Industrial crops',
    origin: 'Nigeria',
    description: 'Cotton for textile and industrial use.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
    packaging: ['Baled for bulk shipment', 'Packing agreed to order'],
    minimumOrder: 'To be confirmed by grade and packing',
    specifications: [
      { label: 'Staple length', value: '≥ 27 mm (indicative Upland grade)' },
      { label: 'Micronaire', value: '3.5–4.9 (indicative)' },
      { label: 'Fiber strength', value: '≥ 28 g/tex (indicative)' },
      { label: 'Moisture', value: 'About 6–8.5% (indicative)' },
      { label: 'Form and grade', value: 'Lint or seed cotton; class and test by lot' }
    ],
    tags: ['Textile supply', 'Industrial use']
  }
];

@Injectable({ providedIn: 'root' })
export class CommodityService {
  private readonly commodityData = signal<readonly Commodity[]>(COMMODITIES);
  private readonly enquiryData = signal<readonly Enquiry[]>([]);

  readonly commodities = this.commodityData.asReadonly();
  readonly enquiries = this.enquiryData.asReadonly();

  findById(id: string): Commodity | undefined {
    return this.commodityData().find((commodity) => commodity.id === id);
  }

  submitEnquiry(enquiry: Enquiry): void {
    this.enquiryData.update((enquiries) => [...enquiries, enquiry]);
  }
}
