import { Certificate, certificateStatus } from './credentials';

describe('certificateStatus', () => {
  const base: Certificate = {
    id: 'test',
    title: 'Test',
    provider: 'HubSpot Academy',
    category: 'SEO',
    description: '',
    issued: '2026-01-11',
    image: { src: '', small: '', width: 1, height: 1, alt: '' },
  };
  const expiring = { ...base, validUntil: '2027-02-10' };

  it('shows when a certificate without an expiry was earned', () => {
    expect(certificateStatus(base)).toEqual({ kind: 'earned', label: 'Earned Jan 2026' });
  });

  it('moves from valid to expiring to expired as the date passes', () => {
    expect(certificateStatus(expiring, new Date(2026, 5, 1))).toEqual({ kind: 'valid', label: 'Valid until Feb 2027' });
    expect(certificateStatus(expiring, new Date(2027, 0, 1))).toEqual({ kind: 'expiring', label: 'Expires Feb 10, 2027' });
    expect(certificateStatus(expiring, new Date(2027, 2, 1))).toEqual({ kind: 'expired', label: 'Expired Feb 2027' });
  });
});
