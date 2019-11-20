import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: any = {
    'ar-ly': { name: 'العربية', rtl: true },
    'zh-cn': { name: '中文（简体）' },
    nl: { name: 'Nederlands' },
    en: { name: 'English' },
    fr: { name: 'Français' },
    hi: { name: 'हिंदी' },
    it: { name: 'Italiano' },
    ja: { name: '日本語' },
    ko: { name: '한국어' },
    pl: { name: 'Polski' },
    'pt-br': { name: 'Português (Brasil)' },
    'pt-pt': { name: 'Português' },
    es: { name: 'Español' }
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };
  transform(lang: string): string {
    return this.languages[lang].name;
  }
  isRTL(lang: string): boolean {
    return this.languages[lang].rtl;
  }
}
