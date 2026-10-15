import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero page-hero-short compliance-hero"><div class="container page-hero-content"><p class="eyebrow eyebrow-light">Export &amp; compliance · Trust through clarity</p><h2>Ready for the rigour<br>of <em>global trade.</em></h2><p>We take export readiness seriously—and believe in clear conversations about what each shipment requires.</p></div></section>
    <section class="section section-pad"><div class="container"><div class="section-heading"><div><p class="eyebrow">Your trust centre</p><h2>Good trade is <em>well prepared.</em></h2></div><p class="heading-aside">Requirements vary by commodity and destination. We work with partners to identify the applicable steps and documentation for each enquiry.</p></div>
      <div class="compliance-grid">
        <article class="compliance-card"><span class="compliance-symbol">01</span><p class="eyebrow">REGULATORY ALIGNMENT</p><h3>Export promotion readiness</h3><p>Export transactions are scoped with Nigerian export requirements in view, including relevant Nigerian Export Promotion Council (NEPC) processes.</p><div class="status-line"><span class="status-dot status-amber"></span><span>Registration details shared during due diligence</span></div></article>
        <article class="compliance-card"><span class="compliance-symbol">02</span><p class="eyebrow">CORPORATE DUE DILIGENCE</p><h3>Company verification</h3><p>Corporate Affairs Commission (CAC) information can be discussed directly as part of your supplier onboarding and verification process.</p><div class="status-line"><span class="status-dot status-amber"></span><span>Documents available for verification on request</span></div></article>
        <article class="compliance-card"><span class="compliance-symbol">03</span><p class="eyebrow">PLANT HEALTH &amp; SAFETY</p><h3>Phytosanitary protocols</h3><p>Where required, phytosanitary inspection and certification are coordinated in line with the commodity, exporting authority and destination-country rules.</p><div class="status-line"><span class="status-dot status-green"></span><span>Requirements confirmed shipment by shipment</span></div></article>
      </div>
      <div class="compliance-disclaimer"><span aria-hidden="true">i</span><p><strong>Transparency matters.</strong> The information above describes our readiness approach, not a representation of issued certificates or registrations. Please request current documents and confirm all destination requirements before placing an order.</p></div>
    </div></section>
    <section class="compliance-steps"><div class="container"><p class="eyebrow eyebrow-light">A considered process</p><h2>From first enquiry<br>to <em>ready to ship.</em></h2><div class="steps-grid"><div><span>01</span><h3>Understand</h3><p>Commodity, volume, destination and required standards.</p></div><div><span>02</span><h3>Align</h3><p>Specifications, documentation and applicable inspections.</p></div><div><span>03</span><h3>Coordinate</h3><p>Shipment preparation with requirements confirmed by all parties.</p></div></div><a class="button button-gold" routerLink="/contact">Discuss your requirements <span>↗</span></a></div></section>
  `
})
export class ComplianceComponent {}
