import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, afterRenderEffect, inject, input, output } from '@angular/core';

/**
 * Native modal <dialog> behaviour, shared by every popup on the site. The
 * browser already traps focus, closes on Escape, and makes the page behind it
 * inert; this adds opening from a boolean, closing on a backdrop click, and
 * handing focus back to whatever opened it.
 *
 *   <dialog class="dialog" aria-labelledby="…" [appModal]="isOpen()" (closed)="isOpen.set(false)" #modal="appModal">
 *     … <button (click)="modal.close()">Close</button>
 *   </dialog>
 */
@Directive({
  selector: 'dialog[appModal]',
  exportAs: 'appModal',
  host: { '(click)': 'onClick($event)', '(close)': 'onClose()' },
})
export class ModalDirective {
  readonly open = input(false, { alias: 'appModal' });
  /** Fires however the dialog closed: a button, Escape, or the backdrop. */
  readonly closed = output<void>();

  private readonly el = inject<ElementRef<HTMLDialogElement>>(ElementRef);
  private readonly doc = inject(DOCUMENT);
  private returnFocusTo: HTMLElement | null = null;

  constructor() {
    // After render, so the dialog's content exists before focus moves into it.
    afterRenderEffect(() => {
      const dialog = this.el.nativeElement;
      if (this.open() && !dialog.open) {
        this.returnFocusTo = this.doc.activeElement as HTMLElement | null;
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
      } else if (!this.open() && dialog.open) {
        this.close();
      }
    });
  }

  close(): void {
    const dialog = this.el.nativeElement;
    if (typeof dialog.close === 'function') {
      dialog.close(); // fires the native `close` event → onClose()
    } else {
      dialog.removeAttribute('open');
      this.onClose();
    }
  }

  /**
   * Backdrop clicks target the <dialog> itself. Checking the rect too keeps a
   * click on the dialog's own scrollbar from closing it.
   */
  protected onClick(event: MouseEvent): void {
    const dialog = this.el.nativeElement;
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) this.close();
  }

  protected onClose(): void {
    this.closed.emit();
    if (this.returnFocusTo?.isConnected) this.returnFocusTo.focus();
    this.returnFocusTo = null;
  }
}
