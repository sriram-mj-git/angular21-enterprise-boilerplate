export type ThemeMode = 'light' | 'dark';

export type ThemeColor = 'purple' | 'blue' | 'green' | 'orange';

export interface ThemeConfig {
  mode: ThemeMode;
  color: ThemeColor;
}
