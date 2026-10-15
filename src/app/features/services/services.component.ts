import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero page-hero-short services-hero"><div class="container page-hero-content"><p class="eyebrow eyebrow-light">What we do · Built around your needs</p><h2>Trade, made <em>more thoughtful.</em></h2><p>Practical support across the agricultural supply chain—shaped around your product, volume and market.</p></div></section>
    <section class="section section-pad services-section"><div class="container"><div class="section-heading"><div><p class="eyebrow">Our capabilities</p><h2>One connected <em>approach.</em></h2></div><p class="heading-aside">We bring the right conversations together so that supply requirements, preparation and export details move forward with clarity.</p></div>
      <div class="service-list">
        <article class="service-row"><span class="service-no">01</span><div class="service-icon">⌘</div><div class="service-copy"><p class="eyebrow">Closer to origin</p><h3>Produce sourcing</h3><p>We engage sourcing networks to understand availability, origin, seasonality and buyer requirements. Share the grade and volume you’re looking for, and we’ll start with a grounded conversation.</p><ul><li>Origin and supply discussions</li><li>Product requirements alignment</li><li>Availability and seasonal planning</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about produce sourcing">↗</a></article>
        <article class="service-row"><span class="service-no">02</span><div class="service-icon">⇄</div><div class="service-copy"><p class="eyebrow">Commercial partnership</p><h3>Bulk commodity trading</h3><p>Collaborative trade conversations built on transparent requirements—from specifications and order quantities to shipment timing and delivery terms.</p><ul><li>Bulk order enquiries</li><li>Buyer-specific specification discussions</li><li>Trade and shipment coordination</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about bulk commodity trading">↗</a></article>
        <article class="service-row"><span class="service-no">03</span><div class="service-icon">◈</div><div class="service-copy"><p class="eyebrow">Prepared for purpose</p><h3>Food processing</h3><p>We discuss available preparation and packing options to help align the product with your intended use and target market.</p><ul><li>Product preparation conversations</li><li>Packaging options for bulk buyers</li><li>Quality parameters agreed to order</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about food processing">↗</a></article>
        <article class="service-row"><span class="service-no">04</span><div class="service-icon">⌁</div><div class="service-copy"><p class="eyebrow">From here to there</p><h3>Export logistics</h3><p>Export and logistics coordination that helps move a supply conversation toward shipment, with destination and documentation requirements in view.</p><ul><li>Export handling coordination</li><li>Documentation and destination discussions</li><li>Shipment planning with trade partners</li></ul></div><a class="service-arrow" routerLink="/contact" aria-label="Enquire about export logistics">↗</a></article>
      </div>
    </div></section>
    <section class="origin-band"><div class="container origin-inner"><div><p class="eyebrow eyebrow-light">Start with your requirements</p><h2>Let’s find the right <em>way forward.</em></h2></div><p>Every good partnership starts with an honest conversation about what you need and what’s possible.</p><a class="button button-light" routerLink="/contact">Make an enquiry <span>↗</span></a></div></section>
  `
})
export class ServicesComponent {}
