import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ZipCodeInput } from './components/zip-code-input';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZipCodeInput],
  template: `
    <div class="min-h-screen bg-white">
      <zip-code-input />
    </div>
  `
})
export class App {}
