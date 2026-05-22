import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { PessoasCrudComponent } from './pessoas/pessoas-crud.component';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [PessoasCrudComponent, ButtonModule, ToggleSwitchModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  readonly themeMode = this.themeService.mode;

  onThemeToggle(isDark: boolean): void {
    this.themeService.setMode(isDark ? 'dark' : 'light');
  }
}
