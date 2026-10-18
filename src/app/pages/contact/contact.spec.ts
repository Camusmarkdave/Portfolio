import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { developer } from '../../data/profile';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  const endpoint = `https://formsubmit.co/ajax/${developer.email}`;
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;
  let http: HttpTestingController;

  const field = (name: string) => el.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#contact-${name}`)!;
  const fill = (values: Record<string, string>) => {
    for (const [name, value] of Object.entries(values)) {
      field(name).value = value;
      field(name).dispatchEvent(new Event('input'));
    }
  };
  const submit = async () => {
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
  };
  const message = { name: 'Ada', email: 'ada@example.com', subject: 'Hello', message: 'A project idea' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    el = fixture.nativeElement;
    http = TestBed.inject(HttpTestingController);
    await fixture.whenStable();
  });

  afterEach(() => http.verify());

  it('gives every field a visible label', () => {
    for (const name of Object.keys(message)) {
      expect(el.querySelector(`label[for="contact-${name}"]`)?.textContent?.trim()).toBeTruthy();
    }
  });

  it('flags empty fields on submit, describes the error, and focuses the first one', async () => {
    await submit();

    const name = field('name');
    expect(name.getAttribute('aria-invalid')).toBe('true');
    expect(el.querySelector(`#${name.getAttribute('aria-describedby')}`)?.textContent).toContain('Enter your name');
    expect(document.activeElement).toBe(name);
    expect(el.textContent).toContain('4 fields need attention');
    http.expectNone(endpoint);
  });

  it('explains an invalid email address, including one with no domain ending', async () => {
    for (const email of ['ada@', 'ada@example']) {
      fill({ ...message, email });
      await submit();

      expect(el.querySelector('#contact-email-error')?.textContent).toContain('name@example.com');
      expect(document.activeElement).toBe(field('email'));
    }
    http.expectNone(endpoint);
  });

  it('sends the message through FormSubmit and confirms it', async () => {
    fill(message);
    await submit();

    const request = http.expectOne(endpoint);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(expect.objectContaining(message));
    request.flush('{"success":"true"}');
    await fixture.whenStable();

    expect(el.querySelector('#contact-sent')?.textContent).toContain('Message sent');
    expect(el.textContent).toContain(message.email);
  });

  it('keeps the message and shows an alert when sending fails', async () => {
    fill(message);
    await submit();

    http.expectOne(endpoint).flush('error', { status: 500, statusText: 'Server Error' });
    await fixture.whenStable();

    expect(el.querySelector('[role="alert"]')?.textContent).toContain("didn't send");
    expect(field('message').value).toBe(message.message);
  });
});
