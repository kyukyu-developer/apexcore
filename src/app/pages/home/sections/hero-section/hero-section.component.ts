import { Component, OnDestroy, OnInit } from '@angular/core';

interface HeroFeature {
  icon: string;
  head: string;
  tail: string;
  accent: 'gold' | 'red';
}

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  readonly slides: string[] = ['hero-banner.png', 'hero-banner-2.png'];
  currentSlide = 0;
  private timerId: ReturnType<typeof setInterval> | null = null;
  private readonly intervalMs = 3000;

  readonly features: HeroFeature[] = [
    { icon: 'rocket', head: 'INNOVATIVE', tail: 'Solutions', accent: 'gold' },
    { icon: 'shield', head: 'RELIABLE',   tail: '& Secure',  accent: 'red'  },
    { icon: 'people', head: 'EXPERT',     tail: 'Team',      accent: 'gold' },
    { icon: 'chart',  head: 'BUSINESS',   tail: 'Growth',    accent: 'red'  },
  ];

  // Typewriter state for the hero title
  private readonly line1Full = 'Innovating Solutions.';
  private readonly line2Full = 'Empowering Growth.';
  readonly line1Chars: string[] = this.line1Full.split('');
  readonly line2Chars: string[] = this.line2Full.split('');
  line1Revealed = 0;
  line2Revealed = 0;
  showCaret1 = false;
  showCaret2 = false;
  private typeTimers: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    this.startAutoplay();
    this.startTyping();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.clearTyping();
  }

  goTo(index: number): void {
    this.currentSlide = index;
    this.restartAutoplay();
  }

  pause(): void {
    this.stopAutoplay();
  }

  resume(): void {
    if (!this.timerId) this.startAutoplay();
  }

  private startAutoplay(): void {
    this.timerId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, this.intervalMs);
  }

  private stopAutoplay(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  private startTyping(): void {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      this.line1Revealed = this.line1Full.length;
      this.line2Revealed = this.line2Full.length;
      return;
    }

    const charDelay = 45;
    const startDelay = 200;
    const line2StartDelay = startDelay + this.line1Full.length * charDelay + 120;

    // Caret follows the line being typed
    this.showCaret1 = true;

    for (let i = 1; i <= this.line1Full.length; i++) {
      this.typeTimers.push(setTimeout(() => {
        this.line1Revealed = i;
      }, startDelay + i * charDelay));
    }

    this.typeTimers.push(setTimeout(() => {
      this.showCaret1 = false;
      this.showCaret2 = true;
    }, line2StartDelay - 60));

    for (let i = 1; i <= this.line2Full.length; i++) {
      this.typeTimers.push(setTimeout(() => {
        this.line2Revealed = i;
      }, line2StartDelay + i * charDelay));
    }

    // Turn off the caret shortly after line 2 finishes so it doesn't blink forever
    const totalDuration = line2StartDelay + this.line2Full.length * charDelay + 800;
    this.typeTimers.push(setTimeout(() => {
      this.showCaret2 = false;
    }, totalDuration));
  }

  private clearTyping(): void {
    this.typeTimers.forEach(t => clearTimeout(t));
    this.typeTimers = [];
  }
}
