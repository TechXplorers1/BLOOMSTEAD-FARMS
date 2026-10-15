import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommodityService } from '../../core/services/commodity.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero page-hero-short commodities-hero"><div class="container page-hero-content"><p class="eyebrow eyebrow-light">The catalogue · Sourced in Nigeria</p><h2>Good things <em>grow here.</em></h2><p>Explore a selection of commodities for bulk buyers, manufacturers and international trading partners.</p></div></section>
    <section class="section section-pad catalog-section"><div class="container">
      <div class="catalog-toolbar"><div><p class="eyebrow">Browse by category</p><h2>Available <em>at origin.</em></h2></div><div class="filter-tabs" role="group" aria-label="Filter commodities by category">@for (category of categories; track category) { <button type="button" [class.filter-active]="activeCategory() === category" (click)="setCategory(category)">{{ category }}</button> }</div></div>
      <p class="catalog-note">Availability, grades and specifications are subject to season, destination and final buyer agreement. Request a quote for current details.</p>
      <div class="catalog-grid">@for (commodity of filteredCommodities(); track commodity.id) {
        <article class="commodity-card">
          <a class="commodity-image" [routerLink]="['/contact']" [queryParams]="{ commodity: commodity.id }">
            <img [src]="commodity.image" [alt]="commodity.name + ' from Nigeria'">
            <span class="commodity-origin">{{ commodity.origin }}</span>
          </a>
          @if (commodity.imageCredit; as credit) {
            <p class="image-credit">
              Image: <a [href]="credit.source" target="_blank" rel="noopener noreferrer">Dried ginger rhizome</a>
              by <a [href]="credit.authorUrl" target="_blank" rel="noopener noreferrer">{{ credit.author }}</a>
              · <a [href]="credit.license" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
              · cropped for display
            </p>
          }
          <div class="commodity-body">
            <div class="commodity-category">{{ commodity.category }}</div>
            <h3>{{ commodity.name }}</h3>
            <p>{{ commodity.description }}</p>
            <div class="commodity-specs">
              <span>MOQ <b>{{ commodity.minimumOrder }}</b></span>
              <span>PACKING <b>{{ commodity.packaging[0] }}</b></span>
            </div>
            <details class="spec-details">
              <summary>Export specifications <span>＋</span></summary>
              <table><tbody>@for (specification of commodity.specifications; track specification.label) {
                <tr><th scope="row">{{ specification.label }}</th><td>{{ specification.value }}</td></tr>
              }</tbody></table>
            </details>
            <a class="commodity-cta" [routerLink]="['/contact']" [queryParams]="{ commodity: commodity.id }">
              Enquire about this commodity <span>↗</span>
            </a>
          </div>
        </article>
      }</div>
      <div class="spec-note"><span>↗</span><p><strong>Need a specific grade or specification?</strong> Share your target requirements in the RFQ form. Final values are confirmed against the available lot and your destination-market needs.</p><a routerLink="/contact">Talk to our team</a></div>
    </div></section>
  `
})
export class CommoditiesComponent {
  private readonly commodityService = inject(CommodityService);
  readonly categories = ['All', 'Oilseeds', 'Grains', 'Roots & tubers', 'Spices'] as const;
  readonly activeCategory = signal<string>('All');
  readonly filteredCommodities = computed(() => {
    const category = this.activeCategory();
    return category === 'All'
      ? this.commodityService.commodities()
      : this.commodityService.commodities().filter((commodity) => commodity.category === category);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }
}
