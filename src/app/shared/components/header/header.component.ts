import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'bf-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.header-scrolled]="isScrolled()">
      <div class="container nav-shell">
        <a class="brand" routerLink="/" aria-label="Bloomstead Farms home" (click)="closeMenu()">
          <span class="brand-mark" aria-hidden="true">b<span>.</span></span>
          <span class="brand-name">Bloomstead<span>FARMS</span></span>
        </a>
        <button class="menu-toggle" type="button" [attr.aria-expanded]="menuOpen()" aria-label="Toggle navigation" (click)="toggleMenu()">
          <span></span><span></span>
        </button>
        <nav class="main-nav" [class.nav-open]="menuOpen()" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About us</a>
          <a routerLink="/commodities" routerLinkActive="active" (click)="closeMenu()">Commodities</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
          <a routerLink="/compliance" routerLinkActive="active" (click)="closeMenu()">Export &amp; compliance</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
          <a class="button button-small nav-cta" routerLink="/contact" (click)="closeMenu()">Request a quote <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly menuOpen = signal(false);
  readonly isScrolled = signal(typeof window !== 'undefined' && window.scrollY > 20);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
