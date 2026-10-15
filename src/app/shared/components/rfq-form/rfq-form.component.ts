import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommodityService } from '../../../core/services/commodity.service';
import { Enquiry } from '../../../core/models/enquiry.model';

interface RfqFormControls {
  fullName: FormControl<string>;
  corporateEmail: FormControl<string>;
  phone: FormControl<string>;
  companyName: FormControl<string>;
  destinationCountry: FormControl<string>;
  portOfDischarge: FormControl<string>;
  commodities: FormControl<string[]>;
  requiredTonnage: FormControl<string[]>;
  message: FormControl<string>;
}

@Component({
  selector: 'bf-rfq-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (submitted()) {
      <div class="success-panel" role="status" aria-live="polite">
        <span class="success-icon" aria-hidden="true">✓</span>
        <p class="eyebrow">Enquiry received</p>
        <h2>Thank you for starting a conversation.</h2>
        <p>Your enquiry has been recorded in this presentation demo. Connect a backend to deliver it to the bloomstead Farms trade team.</p>
        <button class="button button-outline" type="button" (click)="startAnother()">Send another enquiry</button>
      </div>
    } @else {
      <form class="rfq-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div class="form-section-heading">
          <span class="step-number">01</span>
          <div><h3>Your details</h3><p>Tell us who we’ll be working with.</p></div>
        </div>
        <div class="form-grid">
          <label class="field">
            <span>Full name <b>*</b></span>
            <input formControlName="fullName" autocomplete="name" placeholder="e.g. Amina Yusuf">
            @if (showError('fullName')) { <small>Please enter your full name.</small> }
          </label>
          <label class="field">
            <span>Corporate email <b>*</b></span>
            <input formControlName="corporateEmail" type="email" autocomplete="email" placeholder="you&#64;company.com">
            @if (showError('corporateEmail')) { <small>Enter a valid business email address.</small> }
          </label>
          <label class="field">
            <span>Phone / WhatsApp <b>*</b></span>
            <input formControlName="phone" type="tel" autocomplete="tel" placeholder="+234 800 000 0000">
            @if (showError('phone')) { <small>Please enter a reachable phone number.</small> }
          </label>
          <label class="field">
            <span>Company name <b>*</b></span>
            <input formControlName="companyName" autocomplete="organization" placeholder="Your organisation">
            @if (showError('companyName')) { <small>Please enter your company name.</small> }
          </label>
        </div>
        <div class="form-section-heading form-section-next">
          <span class="step-number">02</span>
          <div><h3>Trade requirements</h3><p>A few details help us prepare a relevant response.</p></div>
        </div>
        <div class="form-grid">
          <label class="field">
            <span>Destination country <b>*</b></span>
            <input formControlName="destinationCountry" autocomplete="country-name" placeholder="e.g. Netherlands">
            @if (showError('destinationCountry')) { <small>Please enter a destination country.</small> }
          </label>
          <label class="field">
            <span>Port of discharge</span>
            <input formControlName="portOfDischarge" placeholder="e.g. Rotterdam">
          </label>
          <fieldset class="field field-wide">
            <legend>Commodity of interest <b>*</b></legend>
            <div class="checkbox-grid">
              @for (commodity of commodityOptions; track commodity) {
                <label class="checkbox-option">
                  <input type="checkbox" [checked]="isSelected(commodity)" (change)="toggleCommodity(commodity, $event)">
                  <span>{{ commodity }}</span>
                </label>
              }
            </div>
            @if (showError('commodities')) { <small>Select at least one commodity.</small> }
          </fieldset>
          <fieldset class="field field-wide">
            <legend>Required tonnage <b>*</b> <span class="field-hint">Select all that apply</span></legend>
            <div class="checkbox-grid tonnage-grid">
              @for (volume of volumeOptions; track volume) {
                <label class="checkbox-option">
                  <input type="checkbox" [checked]="isVolumeSelected(volume)" (change)="toggleVolume(volume, $event)">
                  <span>{{ volume }}</span>
                </label>
              }
            </div>
            @if (showError('requiredTonnage')) { <small>Please select an approximate volume.</small> }
          </fieldset>
          <label class="field">
            <span>Additional requirements</span>
            <textarea formControlName="message" rows="3" placeholder="Grade, packaging, target shipment window or anything else we should know."></textarea>
          </label>
        </div>
        <div class="form-submit-row">
          <p><span>*</span> Required fields. Your information is used only to respond to this enquiry.</p>
          <button class="button button-primary" type="submit">Send trade enquiry <span aria-hidden="true">↗</span></button>
        </div>
      </form>
    }
  `
})
export class RfqFormComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly commodityService = inject(CommodityService);

  readonly submitted = signal(false);
  readonly commodityOptions = ['Sesame Seeds', 'Cashew Nuts', 'Dried Ginger', 'Shea Nuts', 'Yellow Maize', 'Dried Cassava'];
  readonly volumeOptions = ['1 × 20ft FCL (approx. 18–25 MT)', '1 × 40ft FCL (approx. 25–28 MT)', 'Multiple containers', 'Flexible / to be discussed'];

  readonly form = new FormGroup<RfqFormControls>({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    corporateEmail: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(7)] }),
    companyName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    destinationCountry: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    portOfDischarge: new FormControl('', { nonNullable: true }),
    commodities: new FormControl<string[]>([], { nonNullable: true, validators: [Validators.required] }),
    requiredTonnage: new FormControl<string[]>([], { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true })
  });

  ngOnInit(): void {
    const commodityId = this.route.snapshot.queryParamMap.get('commodity');
    const commodity = commodityId ? this.commodityService.findById(commodityId) : undefined;
    if (commodity) {
      this.form.controls.commodities.setValue([commodity.name]);
    }
  }

  isSelected(commodity: string): boolean {
    return this.form.controls.commodities.value.includes(commodity);
  }

  toggleCommodity(commodity: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const selected = this.form.controls.commodities.value;
    this.form.controls.commodities.setValue(
      checked ? [...selected, commodity] : selected.filter((item) => item !== commodity)
    );
    this.form.controls.commodities.markAsTouched();
  }

  isVolumeSelected(volume: string): boolean {
    return this.form.controls.requiredTonnage.value.includes(volume);
  }

  toggleVolume(volume: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const selected = this.form.controls.requiredTonnage.value;
    this.form.controls.requiredTonnage.setValue(
      checked ? [...selected, volume] : selected.filter((item) => item !== volume)
    );
    this.form.controls.requiredTonnage.markAsTouched();
  }

  showError(controlName: keyof RfqFormControls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const enquiry: Enquiry = this.form.getRawValue();
    this.commodityService.submitEnquiry(enquiry);
    this.submitted.set(true);
  }

  startAnother(): void {
    this.form.reset({
      fullName: '',
      corporateEmail: '',
      phone: '',
      companyName: '',
      destinationCountry: '',
      portOfDischarge: '',
      commodities: [],
      requiredTonnage: [],
      message: ''
    });
    this.submitted.set(false);
  }
}
