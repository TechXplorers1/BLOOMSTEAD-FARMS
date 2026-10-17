import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'bf-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  template: `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand brand-light" routerLink="/">
            <span class="brand-mark" aria-hidden="true">b<span>.</span></span>
            <span class="brand-name">Bloomstead<span>FARMS</span></span>
          </a>
          <p>Nigerian agricultural products for buyers around the world.</p>
          <a class="footer-email" href="mailto:trade&#64;bloomsteadfarms.ng">trade&#64;bloomsteadfarms.ng <bf-icon name="arrow-up-right" /></a>
        </div>
        <div class="footer-links">
          <h3>Explore</h3>
          <a routerLink="/about">About us</a>
          <a routerLink="/commodities">Commodities</a>
          <a routerLink="/services">Our services</a>
          <a routerLink="/compliance">Export &amp; compliance</a>
        </div>
        <div class="footer-links">
          <h3>Need a supplier?</h3>
          <p>Tell us the product, quantity and destination.</p>
          <a class="footer-cta" routerLink="/contact">Start an enquiry <bf-icon name="arrow-up-right" /></a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Bloomstead Farms. All rights reserved.</span>
        <span>Based in Nigeria</span>
      </div>
    </footer>
  `
})
export class FooterComponent {}
