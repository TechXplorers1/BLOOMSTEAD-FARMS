import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bf-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand brand-light" routerLink="/">
            <span class="brand-mark" aria-hidden="true">b<span>.</span></span>
            <span class="brand-name">Bloomstead<span>FARMS</span></span>
          </a>
          <p>Connecting the richness of Nigerian agriculture with the opportunity of global markets.</p>
          <a class="footer-email" href="mailto:trade&#64;bloomsteadfarms.ng">trade&#64;bloomsteadfarms.ng <span aria-hidden="true">↗</span></a>
        </div>
        <div class="footer-links">
          <h3>Explore</h3>
          <a routerLink="/about">About us</a>
          <a routerLink="/commodities">Commodities</a>
          <a routerLink="/services">Our services</a>
          <a routerLink="/compliance">Export &amp; compliance</a>
        </div>
        <div class="footer-links">
          <h3>Let’s talk trade</h3>
          <p>Have a volume, destination or specification in mind? Tell us what you need.</p>
          <a class="footer-cta" routerLink="/contact">Start an enquiry <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2025 Bloomstead Farms. All rights reserved.</span>
        <span>Nigeria · Connecting to global markets</span>
      </div>
    </footer>
  `
})
export class FooterComponent {}
