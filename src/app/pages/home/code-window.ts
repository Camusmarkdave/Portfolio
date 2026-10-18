import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { developer } from '../../data/profile';
import { lighthouse, pageSpeedUrl, site } from '../../data/site';
import { IconComponent } from '../../shared/icon';

type TokenKind = 'kw' | 'def' | 'key' | 'str' | 'lit' | 'pun';
interface Token {
  kind: TokenKind;
  text: string;
}

/**
 * Hero visual: prints the real `developer` object from data/profile.ts as
 * syntax-highlighted TypeScript (so it can't drift from the source), with a
 * status bar of measured Lighthouse scores instead of decorative ones.
 */
@Component({
  selector: 'app-code-window',
  imports: [DatePipe, IconComponent],
  templateUrl: './code-window.html',
  styleUrl: './code-window.css',
})
export class CodeWindowComponent {
  protected readonly lines = toCodeLines('developer', developer);
  protected readonly lighthouse = lighthouse;
  protected readonly verifyUrl = pageSpeedUrl;
  protected readonly sourceUrl = `${site.repo}/blob/main/src/app/data/profile.ts`;

  /** Lighthouse's own color bands: 90–100 pass, 50–89 average, below 50 fail. */
  protected band(score: number): 'pass' | 'average' | 'fail' {
    return score >= 90 ? 'pass' : score >= 50 ? 'average' : 'fail';
  }
}

/** Serializes a flat object exactly the way it's written in profile.ts. */
function toCodeLines(name: string, value: Record<string, unknown>): Token[][] {
  const lines: Token[][] = [
    [tok('kw', 'export const '), tok('def', name), tok('pun', ' = {')],
    ...Object.entries(value).map(([key, item]) => [tok('pun', '  '), tok('key', key), tok('pun', ': '), ...literal(item), tok('pun', ',')]),
    [tok('pun', '};')],
  ];
  return lines;
}

function literal(value: unknown): Token[] {
  if (Array.isArray(value)) {
    return [tok('pun', '['), ...value.flatMap((item, i) => [...(i ? [tok('pun', ', ')] : []), ...literal(item)]), tok('pun', ']')];
  }
  return typeof value === 'string' ? [tok('str', `'${value}'`)] : [tok('lit', String(value))];
}

function tok(kind: TokenKind, text: string): Token {
  return { kind, text };
}
