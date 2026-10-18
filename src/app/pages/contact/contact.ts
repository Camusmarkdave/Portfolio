import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Injector, afterNextRender, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { developer, emailHref, resumePdf, socials } from '../../data/profile';
import { IconComponent } from '../../shared/icon';
import { contactDetails } from './contact.data';

type Field = 'name' | 'email' | 'subject' | 'message';
type Status = 'idle' | 'sending' | 'sent' | 'error';

/** FormSubmit relays each message to my inbox, so the site needs no backend. */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${developer.email}`;
const FIELDS: Field[] = ['name', 'email', 'subject', 'message'];
/** Validators.email accepts "name@gmail"; a reply needs a real domain, so require a dot in it. */
const HAS_DOMAIN = /@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private readonly http = inject(HttpClient);
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly developer = developer;
  protected readonly emailHref = emailHref;
  protected readonly pdf = resumePdf;
  protected readonly details = contactDetails;
  protected readonly profiles = socials.filter((social) => social.icon !== 'mail');

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(HAS_DOMAIN)]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  protected readonly status = signal<Status>('idle');
  /** Set by the first submit; from then on every invalid field shows its error. */
  protected readonly submitted = signal(false);
  /** Read out by screen readers when a submit stops on invalid fields. */
  protected readonly announcement = signal('');
  /** The sender's address, echoed in the success message. */
  protected readonly replyTo = signal('');

  /** A field's error shows once it has been edited and left, or after a submit attempt. */
  protected showError(field: Field): boolean {
    const control = this.form.controls[field];
    return control.invalid && (this.submitted() || (control.dirty && control.touched));
  }

  protected onSubmit(): void {
    if (this.status() === 'sending') return;
    this.submitted.set(true);

    const invalid = FIELDS.filter((field) => this.form.controls[field].invalid);
    if (invalid.length) {
      this.announcement.set(`Not sent yet: ${invalid.length === 1 ? '1 field needs' : `${invalid.length} fields need`} attention.`);
      // After render, so the error text exists when the field's description is read out.
      afterNextRender(() => this.focus(`contact-${invalid[0]}`), { injector: this.injector });
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    this.announcement.set('');
    this.status.set('sending');
    this.http
      .post(
        FORM_ENDPOINT,
        { name, email, subject, message, _subject: `Portfolio Contact: ${subject}`, _captcha: 'false', _template: 'table' },
        { responseType: 'text' },
      )
      .subscribe({
        next: () => {
          this.replyTo.set(email);
          this.form.reset();
          this.submitted.set(false);
          this.status.set('sent');
          afterNextRender(() => this.focus('contact-sent'), { injector: this.injector });
        },
        error: () => this.status.set('error'),
      });
  }

  protected sendAnother(): void {
    this.status.set('idle');
    afterNextRender(() => this.focus('contact-name'), { injector: this.injector });
  }

  private focus(id: string): void {
    this.host.nativeElement.querySelector<HTMLElement>(`#${id}`)?.focus();
  }
}
