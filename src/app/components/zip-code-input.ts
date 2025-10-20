import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'zip-code-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 class="text-4xl font-light tracking-wide">Sun Signal</h1>

      <div class="flex flex-col gap-2 w-full max-w-xs">
        <label for="zipCode" class="text-sm font-medium">Enter Zip Code</label>
        <input
          id="zipCode"
          type="text"
          [(ngModel)]="zipCodeInput"
          (input)="onZipCodeChange()"
          placeholder="e.g., 94102"
          maxlength="5"
          class="px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
        />

        @if (zipCodeInput().length > 0) {
          <div class="flex gap-2">
            <button
              (click)="saveZipCode()"
              class="flex-1 px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Save
            </button>
            <button
              (click)="clearZipCode()"
              class="px-4 py-2 border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Clear
            </button>
          </div>
        }
      </div>

      @if (savedZipCode().length > 0) {
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">Saved Zip Code</p>
          <p class="text-3xl font-light mt-2">{{ savedZipCode() }}</p>
        </div>
      }
    </div>
  `
})
export class ZipCodeInput {
  zipCodeInput = signal('');
  savedZipCode = signal('');

  private readonly store = inject(Store);

  onZipCodeChange(): void {
    const value = this.zipCodeInput().replace(/\D/g, '').slice(0, 5);
    this.zipCodeInput.set(value);
  }

  saveZipCode(): void {
    const zipCode = this.zipCodeInput();
    if (zipCode.length === 5) {
      this.store.dispatch(AppActions.setZipCode({ zipCode }));
      this.savedZipCode.set(zipCode);
    }
  }

  clearZipCode(): void {
    this.zipCodeInput.set('');
    this.savedZipCode.set('');
    this.store.dispatch(AppActions.clearZipCode());
  }
}
