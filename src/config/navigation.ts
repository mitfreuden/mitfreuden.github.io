import type { GetLocaleOptions } from 'astro:i18n';

export const navigationConfig = {
  de: [
    { label: 'eins', anchor: 'eins' },
    { label: 'zwei', anchor: 'zwei' },
    { label: 'drei', anchor: 'drei' }
  ],
  en: [
    { label: 'one', anchor: 'one' },
    { label: 'two', anchor: 'two' },
    { label: 'three', anchor: 'three' }
  ]
} as const;

export type Locale = GetLocaleOptions;
