import { Component, input } from '@angular/core';

type IconName =
  | 'arrow-up-right'
  | 'arrow-right'
  | 'arrow-up'
  | 'check'
  | 'plus'
  | 'menu'
  | 'close'
  | 'sprout'
  | 'arrows-left-right'
  | 'package'
  | 'layers'
  | 'globe'
  | 'badge-check'
  | 'info';

@Component({
  selector: 'bf-icon',
  standalone: true,
  template: `
    @switch (name()) {
      @case ('arrow-up-right') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg>
      }
      @case ('arrow-right') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
      }
      @case ('arrow-up') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 20V5m-6 6 6-6 6 6" /></svg>
      }
      @case ('check') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 12 4.5 4.5L19 7" /></svg>
      }
      @case ('plus') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14M5 12h14" /></svg>
      }
      @case ('menu') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      }
      @case ('close') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg>
      }
      @case ('sprout') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 21v-9m0 3c0-5-3-8-8-8 0 5 3 8 8 8Zm0-4c0-5 3-8 8-8 0 5-3 8-8 8Z" /></svg>
      }
      @case ('arrows-left-right') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 8h16m-5-5 5 5-5 5M20 16H4m5-5-5 5 5 5" /></svg>
      }
      @case ('package') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 5v9l9 5 9-5V8m-9 5v9m-4-17 9 5" /></svg>
      }
      @case ('layers') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></svg>
      }
      @case ('globe') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
      }
      @case ('badge-check') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 2.5 1.5 3-.2 1.2 2.7 2.3 1.9-.8 2.9.8 2.9-2.3 1.9-1.2 2.7-3-.2L12 21l-2.5-1.5-3 .2-1.2-2.7L3 15.1l.8-2.9L3 9.3l2.3-1.9 1.2-2.7 3 .2L12 3Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></svg>
      }
      @case ('info') {
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M12 11v5m0-8h.01" /></svg>
      }
    }
  `,
  styles: `
    :host { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; vertical-align: middle; line-height: 1; }
    svg { display: block; width: 1em; height: 1em; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  `
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
