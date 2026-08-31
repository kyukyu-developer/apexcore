import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

type RevealMode = 'fade' | 'up' | 'down' | 'left' | 'right' | 'zoom';

@Directive({
  selector: '[appReveal]',
  standalone: false,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') mode: RevealMode | '' = 'up';
  @Input() revealDelay = 0;
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const node = this.el.nativeElement;
    const mode: RevealMode = (this.mode || 'up') as RevealMode;

    this.renderer.addClass(node, 'reveal');
    this.renderer.addClass(node, `reveal--${mode}`);
    if (this.revealDelay) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay}ms`);
    }

    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.renderer.addClass(node, 'reveal--in');
          if (this.revealOnce && this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
          }
        } else if (!this.revealOnce) {
          this.renderer.removeClass(node, 'reveal--in');
        }
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
