import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly darkModeClass = 'app-dark';
  readonly storageKey = 'asiimov-theme';
  readonly mode = signal<ThemeMode>('light');

  constructor() {
    this.applyInitialTheme();
  }

  private applyInitialTheme(): void {
    const saved = localStorage.getItem(this.storageKey) as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode: ThemeMode = saved ?? (prefersDark ? 'dark' : 'light');
    this.setMode(initialMode);
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
    document.documentElement.classList.toggle(this.darkModeClass, mode === 'dark');
    document.documentElement.dataset['theme'] = mode;
    localStorage.setItem(this.storageKey, mode);
  }

  toggle(): void {
    this.setMode(this.mode() === 'light' ? 'dark' : 'light');
  }
}
