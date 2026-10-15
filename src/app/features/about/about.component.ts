import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero page-hero-image about-hero">
      <div class="container page-hero-content"><p class="eyebrow eyebrow-light">Our story · Our direction</p><h2>Growing better ways<br>to <em>trade together.</em></h2><p>We’re building a thoughtful bridge between Nigerian agricultural supply and the people who need it around the world.</p></div>
    </section>
    <section class="section section-pad"><div class="container story-layout"><div class="story-stamp"><span>OUR<br>APPROACH</span><b>BF</b><small>FROM ORIGIN, WITH CARE</small></div><div class="story-copy"><p class="eyebrow">A grounded ambition</p><h2>Local knowledge.<br><em>Global perspective.</em></h2><p class="lead">bloomstead Farms is focused on helping agricultural products reach their full potential in international markets.</p><p>We bring together sourcing, buyer conversations and export coordination with a simple belief: good trade is built on clarity, consistency and respect for the people who make it possible. Our work starts close to origin and keeps the needs of our partners in view at every step.</p><a class="text-link" routerLink="/services">See how we work <span>↗</span></a></div></div></section>
    <section class="roadmap-section"><div class="container"><div class="section-heading"><div><p class="eyebrow">The journey we’re on</p><h2>Building from a <em>strong foundation.</em></h2></div><p class="heading-aside">A clear view of what we can support today—and where we intend to grow next.</p></div><div class="roadmap-grid"><article class="roadmap-card roadmap-current"><span class="roadmap-label"><i></i> CURRENT CAPABILITIES</span><h3>Working close to the source.</h3><p class="roadmap-desc">Today, we focus on dependable sourcing and practical trade coordination.</p><ul><li>Farm-gate aggregation through local supply networks</li><li>Verified sourcing and product specification discussions</li><li>Export handling coordination and shipment preparation</li><li>Flexible packaging conversations for bulk orders</li></ul></article><article class="roadmap-card roadmap-future"><span class="roadmap-label"><i></i> FUTURE EXPANSION PLANS</span><h3>Growing with the opportunity.</h3><p class="roadmap-desc">Our long-term ambition is to deepen value addition and strengthen local capacity.</p><ul><li>Direct mechanized farming partnerships</li><li>Advanced automated processing facilities</li><li>Expanded value-added product capabilities</li><li>Broader origin infrastructure and market reach</li></ul><small>These are forward-looking plans, not services currently represented as operational.</small></article></div></div></section>
    <section class="inline-cta"><div class="container inline-cta-inner"><p>Have a sourcing requirement?</p><a class="button button-primary" routerLink="/contact">Let’s talk about it <span>↗</span></a></div></section>
  `
})
export class AboutComponent {}
