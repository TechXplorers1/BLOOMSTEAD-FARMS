import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <section class="page-hero page-hero-image about-hero">
      <div class="container page-hero-content">
        <p class="eyebrow eyebrow-light">About Bloomstead Farms</p>
        <h1>From Nigeria, <em>to the world.</em></h1>
        <p>We connect Nigerian agricultural products with buyers around the world.</p>
      </div>
    </section>
    <section class="section section-pad">
      <div class="container story-layout">
        <div class="story-stamp"><span>OUR<br>APPROACH</span><b>BF</b><small>FROM ORIGIN, WITH CARE</small></div>
        <div class="story-copy">
          <p class="eyebrow">What we do</p>
          <h2>Local roots.<br><em>Clear trade.</em></h2>
          <p class="lead">We help buyers source and export agricultural products from Nigeria.</p>
          <p>Our team works with local suppliers and buyers to agree on products, quality, packing and delivery.</p>
          <a class="text-link" routerLink="/services">See our services <bf-icon name="arrow-up-right" /></a>
        </div>
      </div>
    </section>
    <section class="roadmap-section">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">Our work</p><h2>What we do <em>today.</em></h2></div>
          <p class="heading-aside">Here’s what buyers can discuss with us now.</p>
        </div>
        <div class="roadmap-grid">
          <article class="roadmap-card roadmap-current">
            <span class="roadmap-label"><i></i> TODAY</span>
            <h3>Trade support</h3>
            <ul>
              <li>Product sourcing and availability</li>
              <li>Quality and order details</li>
              <li>Packing and export coordination</li>
            </ul>
          </article>
          <article class="roadmap-card roadmap-future">
            <span class="roadmap-label"><i></i> FUTURE PLANS</span>
            <h3>Growing our offer</h3>
            <ul>
              <li>More local processing</li>
              <li>More value-added products</li>
              <li>Stronger supply partnerships</li>
            </ul>
            <small>These are plans, not services currently offered.</small>
          </article>
        </div>
      </div>
    </section>
    <section class="inline-cta"><div class="container inline-cta-inner"><p>Have a product in mind?</p><a class="button button-primary" routerLink="/contact">Talk to our team <bf-icon name="arrow-up-right" /></a></div></section>
  `
})
export class AboutComponent {}
