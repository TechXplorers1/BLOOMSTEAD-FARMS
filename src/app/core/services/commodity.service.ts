import { Injectable, signal } from '@angular/core';
import { Commodity } from '../models/commodity.model';
import { Enquiry } from '../models/enquiry.model';

const COMMODITIES: readonly Commodity[] = [
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    category: 'Oilseeds',
    origin: 'Northern Nigeria',
    description: 'Carefully sourced sesame for food manufacturers, ingredient distributors and international trading partners.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Jumbo bags on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: '≤ 8%' },
      { label: 'Purity', value: '98–99% (to specification)' },
      { label: 'Oil content', value: 'Indicative 45–50%' },
      { label: 'FFA', value: 'Available on request' }
    ],
    tags: ['Cleaned options', 'Export packing']
  },
  {
    id: 'cashew-nuts',
    name: 'Cashew Nuts',
    category: 'Oilseeds',
    origin: 'Nigeria',
    description: 'Nigerian raw cashew sourced through regional supply networks, with grades and processing requirements agreed to order.',
    image: 'assets/images/cashew-nuts.jpg',
    packaging: ['80kg jute bags', 'Custom packing on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: 'To buyer specification' },
      { label: 'Purity', value: 'Graded to order' },
      { label: 'Oil content', value: 'Not routinely specified' },
      { label: 'FFA', value: 'Available on request' }
    ],
    tags: ['Raw nuts', 'Seasonal sourcing']
  },
  {
    id: 'ginger',
    name: 'Dried Ginger',
    category: 'Spices',
    origin: 'Nigeria',
    description: 'A versatile spice crop available in buyer-selected cuts and preparations for food ingredient supply chains.',
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
      { label: 'Moisture content', value: 'To buyer specification' },
      { label: 'Purity', value: 'Cleaned to agreed grade' },
      { label: 'Oil content', value: 'Indicative; confirm by lot' },
      { label: 'FFA', value: 'Not routinely specified' }
    ],
    tags: ['Whole or split', 'Buyer-selected preparation']
  },
  {
    id: 'shea-nuts',
    name: 'Shea Nuts',
    category: 'Oilseeds',
    origin: 'Northern Nigeria',
    description: 'Responsibly sourced shea nuts for processors and manufacturers seeking dependable West African supply.',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk formats on request'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: 'To buyer specification' },
      { label: 'Purity', value: 'Cleaned to agreed grade' },
      { label: 'Oil content', value: 'Indicative; confirm by lot' },
      { label: 'FFA', value: 'Available on request' }
    ],
    tags: ['Processor supply', 'Bulk availability']
  },
  {
    id: 'maize',
    name: 'Yellow Maize',
    category: 'Grains',
    origin: 'Nigeria',
    description: 'Bulk yellow maize for feed and food-sector buyers, subject to seasonal availability and destination requirements.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85',
    packaging: ['50kg PP bags', 'Bulk container options'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: 'To buyer specification' },
      { label: 'Purity', value: 'Graded to order' },
      { label: 'Oil content', value: 'Not routinely specified' },
      { label: 'FFA', value: 'Not routinely specified' }
    ],
    tags: ['Food or feed grade', 'Seasonal sourcing']
  },
  {
    id: 'dried-cassava',
    name: 'Dried Cassava',
    category: 'Roots & tubers',
    origin: 'Nigeria',
    description: 'Dried cassava formats for industrial and food applications, scoped to your processing and destination needs.',
    image: 'assets/images/dried-cassava.jpg',
    packaging: ['50kg PP bags', 'Custom bulk packing'],
    minimumOrder: '1 × 20ft FCL',
    specifications: [
      { label: 'Moisture content', value: 'To buyer specification' },
      { label: 'Purity', value: 'Prepared to agreed grade' },
      { label: 'Oil content', value: 'Not routinely specified' },
      { label: 'FFA', value: 'Not routinely specified' }
    ],
    tags: ['Industrial supply', 'Custom preparation']
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
