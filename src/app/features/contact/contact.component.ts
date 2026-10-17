import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RfqFormComponent } from '../../shared/components/rfq-form/rfq-form.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  standalone: true,
  imports: [RouterLink, RfqFormComponent, IconComponent],
  template: `
    <section class="contact-hero">
      <div class="container contact-hero-inner">
        <div>
          <p class="eyebrow eyebrow-light">Contact us</p>
          <h1>Tell us what <em>you need.</em></h1>
          <p>Send your product and order details. We’ll get back to you.</p>
        </div>
        <a class="contact-email" href="mailto:trade&#64;bloomsteadfarms.ng">trade&#64;bloomsteadfarms.ng <bf-icon name="arrow-up-right" /></a>
      </div>
    </section>
    <section class="section contact-section">
      <div class="container contact-layout">
        <aside class="contact-aside">
          <p class="eyebrow">Your enquiry</p>
          <h2>Ready to <em>enquire?</em></h2>
          <p>Have your product, destination and quantity in mind.</p>
          <a class="contact-browse" routerLink="/commodities">Browse products <bf-icon name="arrow-up-right" /></a>
        </aside>
        <div class="form-card"><bf-rfq-form /></div>
      </div>
    </section>
  `
})
export class ContactComponent {}
