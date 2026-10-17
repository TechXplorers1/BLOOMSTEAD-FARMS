import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="page-hero page-hero-short services-hero">
      <div class="container page-hero-content">
        <p class="eyebrow eyebrow-light">Our services</p>
        <h1>Trade support, <em>made simple.</em></h1>
        <p>We help buyers source products and plan orders from Nigeria.</p>
      </div>
    </section>
    <section class="section section-pad services-section"><div class="container"><div class="section-heading"><div><p class="eyebrow">How we can help</p><h2>Support at every <em>step.</em></h2></div><p class="heading-aside">Tell us what you need. We’ll work through the details with you.</p></div>
      <div class="service-list">
        <article class="service-row"><span class="service-no">01</span><div class="service-icon"><bf-icon name="sprout" /></div><div class="service-copy"><p class="eyebrow">Find products</p><h3>Produce sourcing</h3><p>We help you find products and check seasonal availability.</p><ul><li>Product and grade</li><li>Origin and supply</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about produce sourcing"><bf-icon name="arrow-up-right" /></a></article>
        <article class="service-row"><span class="service-no">02</span><div class="service-icon"><bf-icon name="arrows-left-right" /></div><div class="service-copy"><p class="eyebrow">Plan your order</p><h3>Bulk commodity trading</h3><p>Discuss order size, price details and delivery plans with our team.</p><ul><li>Order quantities</li><li>Timing and destination</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about bulk commodity trading"><bf-icon name="arrow-up-right" /></a></article>
        <article class="service-row"><span class="service-no">03</span><div class="service-icon"><bf-icon name="layers" /></div><div class="service-copy"><p class="eyebrow">Prepare your product</p><h3>Processing and packing</h3><p>Agree on how your product should be prepared and packed.</p><ul><li>Product preparation</li><li>Packing options</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about processing and packing"><bf-icon name="arrow-up-right" /></a></article>
        <article class="service-row"><span class="service-no">04</span><div class="service-icon"><bf-icon name="globe" /></div><div class="service-copy"><p class="eyebrow">Plan delivery</p><h3>Export coordination</h3><p>Plan shipping and documents for your destination market.</p><ul><li>Shipment planning</li><li>Destination requirements</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about export coordination"><bf-icon name="arrow-up-right" /></a></article>
      </div>
    </div></section>
    <section class="origin-band"><div class="container origin-inner"><div><p class="eyebrow eyebrow-light">Have an order in mind?</p><h2>Let’s discuss <em>your needs.</em></h2></div><p>Share the product, quantity and destination.</p><a class="button button-light" routerLink="/contact">Contact our team <bf-icon name="arrow-up-right" /></a></div></section>
  `
})
export class ServicesComponent {}
