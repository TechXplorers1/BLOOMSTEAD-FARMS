import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IconComponent } from './shared/components/icon/icon.component';

@Component({
  selector: 'bf-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, IconComponent],
  template: `
    <bf-header />
    <main id="main-content">
      <router-outlet />
    </main>
    <bf-footer />
    @if (showBackToTop()) {
      <button class="back-to-top" type="button" aria-label="Back to top" (click)="scrollToTop()">
        <bf-icon name="arrow-up" />
      </button>
    }
  `
})
export class AppComponent {
  readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 400);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
