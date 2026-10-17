import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="hero">
      <div class="hero-image" role="img" aria-label="Sunlight over a thriving green agricultural landscape"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span> From Nigeria to the world</p>
        <h1>Nigerian produce. <em>Global markets.</em></h1>
        <p class="hero-copy">We help buyers source, prepare and ship agricultural products from Nigeria.</p>
        <div class="hero-actions">
          <a class="button button-gold" routerLink="/contact">Request a quote <bf-icon name="arrow-up-right" /></a>
          <a class="button button-glass" routerLink="/commodities">Browse products <bf-icon name="arrow-right" /></a>
        </div>
        <div class="hero-note"><span class="hero-note-dot"></span> Sourcing · Preparation · Export</div>
      </div>
    </section>

    <section class="proof-strip">
      <div class="container proof-grid">
        <div class="proof-intro"><span class="eyebrow">Trade made clear</span><p>Practical support, from source to shipment.</p></div>
        <div class="proof-item"><bf-icon class="proof-icon" name="globe" /><div><strong>Export support</strong><span>Clear shipment planning</span></div></div>
        <div class="proof-item"><bf-icon class="proof-icon" name="badge-check" /><div><strong>Local sourcing</strong><span>Closer to supply</span></div></div>
        <div class="proof-item"><bf-icon class="proof-icon" name="package" /><div><strong>Order-ready packing</strong><span>Options to suit your needs</span></div></div>
      </div>
    </section>

    <section class="section section-pad">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">How we help</p><h2>From source to <em>shipment.</em></h2></div>
          <p class="heading-aside">One team to help you find products, agree on details and plan delivery.</p>
        </div>
        <div class="pillar-grid">
          <article class="pillar-card"><span class="card-number">01 / SOURCE</span><h3>Find the right products</h3><p>We source to your product and grade needs.</p><a routerLink="/services">Our services <bf-icon name="arrow-up-right" /></a></article>
          <article class="pillar-card"><span class="card-number">02 / TRADE</span><h3>Plan your order</h3><p>Discuss quantity, timing and destination with our team.</p><a routerLink="/services">Our services <bf-icon name="arrow-up-right" /></a></article>
          <article class="pillar-card"><span class="card-number">03 / PREPARE</span><h3>Get it ready</h3><p>Agree on product preparation and packing.</p><a routerLink="/services">Our services <bf-icon name="arrow-up-right" /></a></article>
          <article class="pillar-card"><span class="card-number">04 / SHIP</span><h3>Coordinate export</h3><p>Plan shipment and documents for your destination.</p><a routerLink="/services">Our services <bf-icon name="arrow-up-right" /></a></article>
        </div>
      </div>
    </section>

    <section class="origin-band">
      <div class="container origin-inner">
        <div><p class="eyebrow eyebrow-light">Rooted in Nigeria</p><h2>Local knowledge. <em>Global trade.</em></h2></div>
        <p>We make it easier to buy agricultural products from Nigeria.</p>
        <a class="button button-light" routerLink="/about">About Bloomstead <bf-icon name="arrow-up-right" /></a>
      </div>
    </section>

    <section class="section section-pad commodity-preview">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">Our catalogue</p><h2>Products from <em>Nigeria.</em></h2></div>
          <a class="text-link" routerLink="/commodities">View all products <bf-icon name="arrow-up-right" /></a>
        </div>
        <div class="home-product-grid">
          <a class="home-product" routerLink="/commodities"><img src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=85" alt="Sesame seeds close up"><span>01 · OILSEEDS</span><h3>Sesame seeds <bf-icon name="arrow-up-right" /></h3></a>
          <a class="home-product" routerLink="/commodities"><img src="assets/images/dried-ginger.jpg" alt="Dried ginger rhizomes"><span>02 · SPICES</span><h3>Dried ginger <bf-icon name="arrow-up-right" /></h3></a>
          <a class="home-product" routerLink="/commodities"><img src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=700&q=85" alt="Golden maize crop"><span>03 · GRAINS</span><h3>Yellow maize <bf-icon name="arrow-up-right" /></h3></a>
        </div>
      </div>
    </section>

    <section class="cta-panel-wrap"><div class="container cta-panel"><div><p class="eyebrow eyebrow-light">Let’s talk</p><h2>Looking for a <em>supplier?</em></h2><p>Tell us the product, quantity and destination you need.</p></div><a class="button button-gold" routerLink="/contact">Contact our team <bf-icon name="arrow-up-right" /></a></div></section>
  `
})
export class HomeComponent {}
