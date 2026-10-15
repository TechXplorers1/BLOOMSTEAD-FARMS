import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RfqFormComponent } from '../../shared/components/rfq-form/rfq-form.component';

@Component({
  standalone: true,
  imports: [RouterLink, RfqFormComponent],
  template: `
    <section class="contact-hero"><div class="container contact-hero-inner"><div><p class="eyebrow eyebrow-light">Contact · Let’s talk trade</p><h2>Big plans start<br>with a <em>good question.</em></h2><p>Tell us what you’re looking for. We’ll bring the right people into the conversation.</p></div><a class="contact-email" href="mailto:trade&#64;bloomsteadfarms.ng">trade&#64;bloomsteadfarms.ng <span>↗</span></a></div></section>
    <section class="section contact-section"><div class="container contact-layout"><aside class="contact-aside"><p class="eyebrow">Your trade enquiry</p><h2>Let’s make it<br><em>specific.</em></h2><p>Whether you’re exploring a new supplier or planning your next shipment, a little detail helps us get you a better answer.</p><div class="contact-prompt"><span>01</span><p><strong>Know the commodity?</strong><br>Tell us the product and grade you’re looking for.</p></div><div class="contact-prompt"><span>02</span><p><strong>Have a destination?</strong><br>Share your country and preferred port.</p></div><div class="contact-prompt"><span>03</span><p><strong>Planning volume?</strong><br>Even an estimate gives us a useful starting point.</p></div><a class="contact-browse" routerLink="/commodities">Still exploring? Browse commodities <span>↗</span></a></aside><div class="form-card"><bf-rfq-form /></div></div></section>
  `
})
export class ContactComponent {}
