export default class SettingsModel {
  /**
   * Currency options
   */
  static optsCurrency = (): Array<{ value: number; label: string }> => [
    {
      label: 'US Dollar ($)',
      value: 2,
    },
    {
      label: 'Koruna česká (Kč)',
      value: 1,
    },
  ];

  /**
   * Language options
   */
  static optsLanguage = (): Array<{ value: number; label: string }> => [
    {
      label: 'English (US)',
      value: 2,
    },
    {
      label: 'Čeština',
      value: 1,
    },
  ];

  /**
   * Newsletter options
   */
  static optsNewsletter = (): Array<{ value: number; label: string }> => [
    {
      label: 'Allowed',
      value: 1,
    },
    {
      label: 'Disallowed',
      value: 0,
    },
  ];

  /**
   * Timezone options
   */
  static optsTimezone = (): Array<{ value: number; label: string }> => [
    {
      label: '(+1:00) Prague',
      value: 2,
    },
    {
      label: '(+0:00) London',
      value: 1,
    },
  ];
}
