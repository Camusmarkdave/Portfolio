import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { developer, emailHref, socials } from '../data/profile';
import { footerNav, legalLinks } from '../data/site';
import { IconComponent } from '../shared/icon';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, IconComponent],
  templateUrl: './site-footer.html',
})
export class SiteFooterComponent {
  protected readonly developer = developer;
  protected readonly emailHref = emailHref;
  protected readonly socials = socials;
  protected readonly nav = footerNav;
  protected readonly legal = legalLinks;
  /** Read from the clock so the copyright never goes stale again. */
  protected readonly year = new Date().getFullYear();
}
