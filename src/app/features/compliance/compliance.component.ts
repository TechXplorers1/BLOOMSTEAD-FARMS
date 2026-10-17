import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="page-hero page-hero-short compliance-hero"><div class="container page-hero-content"><p class="eyebrow eyebrow-light">Export information</p><h1>Know what each <em>shipment needs.</em></h1><p>Export rules depend on the product and destination. We’ll help you check the requirements.</p></div></section>
    <section class="section section-pad"><div class="container"><div class="section-heading"><div><p class="eyebrow">Before you order</p><h2>Clear steps. <em>Clear documents.</em></h2></div><p class="heading-aside">We confirm documents and checks for each order.</p></div>
      <div class="compliance-grid">
        <article class="compliance-card"><span class="compliance-symbol">01</span><p class="eyebrow">EXPORT RULES</p><h3>Export registration</h3><p>We check the Nigerian export steps that apply to your order.</p><div class="status-line"><span class="status-dot status-amber"></span><span>Ask us for current registration details.</span></div></article>
        <article class="compliance-card"><span class="compliance-symbol">02</span><p class="eyebrow">COMPANY DETAILS</p><h3>Supplier checks</h3><p>Company details can be shared for your supplier review.</p><div class="status-line"><span class="status-dot status-amber"></span><span>Documents are available on request.</span></div></article>
        <article class="compliance-card"><span class="compliance-symbol">03</span><p class="eyebrow">PLANT HEALTH</p><h3>Product inspections</h3><p>Some products need inspection or a phytosanitary certificate.</p><div class="status-line"><span class="status-dot status-green"></span><span>We confirm requirements for each destination.</span></div></article>
      </div>
      <div class="compliance-disclaimer"><bf-icon name="info" /><p><strong>Please note:</strong> Requirements vary by product and country. Ask for current documents before placing an order.</p></div>
    </div></section>
    <section class="compliance-steps"><div class="container"><p class="eyebrow eyebrow-light">How it works</p><h2>Three steps to <em>ship.</em></h2><div class="steps-grid"><div><span>01</span><h3>Tell us</h3><p>Share the product and destination.</p></div><div><span>02</span><h3>Check</h3><p>We review the order and export needs.</p></div><div><span>03</span><h3>Plan</h3><p>Agree on the documents and next steps.</p></div></div><a class="button button-gold" routerLink="/contact">Ask a question <bf-icon name="arrow-up-right" /></a></div></section>
  `
})
export class ComplianceComponent {}
