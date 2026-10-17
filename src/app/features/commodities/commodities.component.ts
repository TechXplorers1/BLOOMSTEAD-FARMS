import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommodityService } from '../../core/services/commodity.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="page-hero page-hero-short commodities-hero"><div class="container page-hero-content"><p class="eyebrow eyebrow-light">Our catalogue</p><h1>Products from <em>Nigeria.</em></h1><p>Browse products for wholesale buyers.</p></div></section>
    <section class="section section-pad catalog-section"><div class="container">
      <div class="catalog-toolbar"><div><p class="eyebrow">Browse by category</p><h2>All <em>products.</em></h2></div><div class="filter-tabs" role="group" aria-label="Filter commodities by category">@for (category of categories; track category) { <button type="button" [class.filter-active]="activeCategory() === category" (click)="setCategory(category)">{{ category }}</button> }</div></div>
      <p class="catalog-note">Specifications below are indicative guides, not confirmed lot results. Final values depend on testing, buyer needs and destination rules.</p>
      <div class="catalog-grid">@for (commodity of filteredCommodities(); track commodity.id) {
        <article class="commodity-card">
          <a class="commodity-image" [routerLink]="['/contact']" [queryParams]="{ commodity: commodity.id }">
            <img [src]="commodity.image" [alt]="commodity.name + ' from Nigeria'">
            <span class="commodity-origin">{{ commodity.origin }}</span>
          </a>

          <div class="commodity-body">
            <div class="commodity-category">{{ commodity.category }}</div>
            <h3>{{ commodity.name }}</h3>
            <p>{{ commodity.description }}</p>
            <div class="commodity-specs">
              <span>MOQ <b>{{ commodity.minimumOrder }}</b></span>
              <span>PACKING <b>{{ commodity.packaging[0] }}</b></span>
            </div>
            <details class="spec-details">
              <summary>
                <span class="details-label-closed">View details</span>
                <span class="details-label-open">Hide details</span>
                <bf-icon name="plus" />
              </summary>
              <div class="commodity-detail-panel">
                <h4>{{ commodity.name }} details</h4>
                <p>{{ commodity.description }}</p>
                <dl>
                  <div><dt>Origin</dt><dd>{{ commodity.origin }}</dd></div>
                  <div><dt>Minimum order</dt><dd>{{ commodity.minimumOrder }}</dd></div>
                  <div class="detail-packing"><dt>Packing options</dt><dd>@for (option of commodity.packaging; track option; let last = $last) { {{ option }}@if (!last) { · } }</dd></div>
                </dl>
                <h5>Technical specifications (indicative)</h5>
                <p class="spec-disclaimer">Guide only: values include estimates and buyer-provided figures. Confirm against lot tests and buyer requirements.</p>
                <table><tbody>@for (specification of commodity.specifications; track specification.label) {
                  <tr><th scope="row">{{ specification.label }}</th><td>{{ specification.value }}</td></tr>
                }</tbody></table>
              </div>
            </details>
            <div class="commodity-actions">
              <a class="commodity-cta" [routerLink]="['/contact']" [queryParams]="{ commodity: commodity.id }" [attr.aria-label]="'Enquire about ' + commodity.name">
                Enquire <bf-icon name="arrow-up-right" />
              </a>
            </div>
          </div>
        </article>
      }</div>
      <div class="spec-note"><bf-icon name="info" /><p><strong>Need a certain grade or pack?</strong> Tell us what you need and we’ll check availability.</p><a routerLink="/contact">Ask our team</a></div>
    </div></section>
  `
})
export class CommoditiesComponent {
  private readonly commodityService = inject(CommodityService);
  readonly categories = [
    'All',
    'Cocoa',
    'Fruit',
    'Grains',
    'Industrial crops',
    'Oilseeds',
    'Oils & fats',
    'Roots & tubers',
    'Spices',
    'Spices & botanicals'
  ] as const;
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
