import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-image" role="img" aria-label="Sunlight over a thriving green agricultural landscape"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <p class="eyebrow eyebrow-light"><span class="eyebrow-line"></span> Nigerian roots. Global reach.</p>
        <h2>Connecting Nigerian agricultural excellence <em>to global markets.</em></h2>
        <p class="hero-copy">A dependable partner for sourcing, processing and moving quality African produce to the world.</p>
        <div class="hero-actions">
          <a class="button button-gold" routerLink="/contact">Request a quotation <span aria-hidden="true">↗</span></a>
          <a class="button button-glass" routerLink="/commodities">Explore commodities <span aria-hidden="true">→</span></a>
        </div>
        <div class="hero-note"><span class="hero-note-dot"></span> Built for buyers. Grounded in origin.</div>
      </div>
      <div class="hero-index">01 <span></span> 06</div>
    </section>

    <section class="proof-strip">
      <div class="container proof-grid">
        <div class="proof-intro"><span class="eyebrow">A partner in every detail</span><p>Trade confidence, from the point of origin.</p></div>
        <div class="proof-item"><span class="proof-icon">↗</span><div><strong>Export-led</strong><span>Buyer-ready coordination</span></div></div>
        <div class="proof-item"><span class="proof-icon">◎</span><div><strong>Verified sourcing</strong><span>Closer to the supply chain</span></div></div>
        <div class="proof-item"><span class="proof-icon">◇</span><div><strong>Flexible packing</strong><span>Matched to your requirements</span></div></div>
      </div>
    </section>

    <section class="section section-pad">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">What we bring to the table</p><h2>From farm gate to <em>far beyond.</em></h2></div>
          <p class="heading-aside">We connect trusted Nigerian supply with the requirements of global buyers—through thoughtful sourcing, clear communication and export coordination.</p>
        </div>
        <div class="pillar-grid">
          <article class="pillar-card"><span class="card-number">01 / SOURCE</span><div class="pillar-icon">⌘</div><h3>Produce sourcing</h3><p>Supply relationships built around origin, availability and your product specifications.</p><a routerLink="/services">Explore sourcing <span>↗</span></a></article>
          <article class="pillar-card"><span class="card-number">02 / TRADE</span><div class="pillar-icon">⇄</div><h3>Commodity trading</h3><p>Commercially practical conversations on volume, grade, timing and destination.</p><a routerLink="/services">Explore trading <span>↗</span></a></article>
          <article class="pillar-card"><span class="card-number">03 / PROCESS</span><div class="pillar-icon">◈</div><h3>Processing</h3><p>Product preparation and packing tailored to the needs of your market and operation.</p><a routerLink="/services">Explore processing <span>↗</span></a></article>
          <article class="pillar-card"><span class="card-number">04 / DELIVER</span><div class="pillar-icon">⌁</div><h3>International export</h3><p>Export coordination that helps connect local supply with international destinations.</p><a routerLink="/services">Explore export support <span>↗</span></a></article>
        </div>
      </div>
    </section>

    <section class="origin-band">
      <div class="container origin-inner">
        <div><p class="eyebrow eyebrow-light">Rooted in possibility</p><h2>Good trade starts with <em>good relationships.</em></h2></div>
        <p>We work to make sourcing from Nigeria clearer, more collaborative and more dependable for every partner in the chain.</p>
        <a class="button button-light" routerLink="/about">Get to know us <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="section section-pad commodity-preview">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">A selection from origin</p><h2>Good things <em>grow here.</em></h2></div>
          <a class="text-link" routerLink="/commodities">View all commodities <span>↗</span></a>
        </div>
        <div class="home-product-grid">
          <a class="home-product" routerLink="/commodities"><img src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=85" alt="Sesame seeds close up"><span>01 · OILSEEDS</span><h3>Sesame seeds <b>↗</b></h3></a>
          <a class="home-product" routerLink="/commodities"><img src="assets/images/dried-ginger.jpg" alt="Dried ginger rhizomes"><span>02 · SPICES</span><h3>Dried ginger <b>↗</b></h3></a>
          <a class="home-product" routerLink="/commodities"><img src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=700&q=85" alt="Golden maize crop"><span>03 · GRAINS</span><h3>Yellow maize <b>↗</b></h3></a>
        </div>
      </div>
    </section>

    <section class="cta-panel-wrap"><div class="container cta-panel"><div><p class="eyebrow eyebrow-light">The first step is a conversation</p><h2>Let’s get your next shipment <em>moving.</em></h2><p>Share your product, volume and destination. Our trade team will take it from there.</p></div><a class="button button-gold" routerLink="/contact">Start an enquiry <span aria-hidden="true">↗</span></a></div></section>
  `
})
export class HomeComponent {}
