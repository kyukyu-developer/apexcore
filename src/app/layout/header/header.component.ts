import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

interface NavLink {
  label: string;
  route: string;
  fragment?: string;
  hasCaret?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileOpen = false;

  private currentPath = '/';
  private currentFragment: string | null = null;
  private scrolledFragment: string | null = null;
  private routerSub?: Subscription;
  private observer?: IntersectionObserver;
  private visibleSections = new Set<string>();
  private observedSections: HTMLElement[] = [];

  readonly links: NavLink[] = [
    { label: 'Home',       route: '/' },
    { label: 'About',      route: '/', fragment: 'about' },
    { label: 'Services',   route: '/', fragment: 'services' },
    { label: 'Why Us',     route: '/', fragment: 'why-apex-core' },
    { label: 'Solutions',  route: '/', fragment: 'solutions' },
    { label: 'Industries', route: '/', fragment: 'industries' },
    { label: 'Process',    route: '/', fragment: 'process' },
    { label: 'FAQ',        route: '/', fragment: 'faq' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.applyUrl(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.applyUrl(e.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.teardownScrollSpy();
  }

  isActive(link: NavLink): boolean {
    if (link.route !== this.currentPath) return false;

    // On the home page, let scroll position drive the active menu item.
    if (this.currentPath === '/') {
      if (link.fragment) return this.scrolledFragment === link.fragment;
      return this.scrolledFragment === null;
    }

    if (link.fragment) return this.currentFragment === link.fragment;
    return !this.currentFragment;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
  }

  toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
    document.body.style.overflow = this.mobileOpen ? 'hidden' : '';
  }

  closeMobile(): void {
    if (this.mobileOpen) {
      this.mobileOpen = false;
      document.body.style.overflow = '';
    }
  }

  private applyUrl(url: string): void {
    const [pathAndQuery, fragment] = url.split('#');
    const path = pathAndQuery.split('?')[0] || '/';
    this.currentPath = path;
    this.currentFragment = fragment ?? null;

    if (path === '/') {
      // Defer to next tick so the home page's sections have rendered.
      setTimeout(() => this.setupScrollSpy(), 0);
    } else {
      this.teardownScrollSpy();
      this.scrolledFragment = null;
    }
  }

  private setupScrollSpy(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (!sections.length) return;

    // Skip if already observing the same set of sections.
    if (this.observer && sections.length === this.observedSections.length
      && sections.every((s, i) => s === this.observedSections[i])) {
      return;
    }

    this.teardownScrollSpy();
    this.observedSections = sections;
    this.visibleSections.clear();

    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting) this.visibleSections.add(id);
        else this.visibleSections.delete(id);
      }
      this.updateScrolledFragment();
    }, {
      // Activate a section when it crosses the band 30%–40% down the viewport.
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    });

    sections.forEach(s => this.observer!.observe(s));
  }

  private teardownScrollSpy(): void {
    this.observer?.disconnect();
    this.observer = undefined;
    this.observedSections = [];
    this.visibleSections.clear();
  }

  private updateScrolledFragment(): void {
    // Pick the topmost visible section by document order so the active menu
    // matches what the user is looking at, not the last section that entered view.
    for (const section of this.observedSections) {
      if (this.visibleSections.has(section.id)) {
        this.scrolledFragment = section.id;
        return;
      }
    }
    this.scrolledFragment = null;
  }
}
