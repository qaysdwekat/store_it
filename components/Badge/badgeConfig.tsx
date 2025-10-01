const BadgeColor = {
  neutral: 'neutral-bold',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  rose: 'light-rose',
  orange: 'light-orange',
  cactus: 'light-cactus',
  cyan: 'light-cyan',
  indigo: 'light-indigo',
  iris: 'light-iris',
  pink: 'light-pink',
} as const;

export type BadgeColor = keyof typeof BadgeColor;

const BadgeSize = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type BadgeSize = keyof typeof BadgeSize;

const BadgeVariant = {
  highContrast: 'highContrast',
  lowContrast: 'lowContrast',
  outline: 'outline',
  plain: 'plain',
} as const;

export type BadgeVariant = keyof typeof BadgeVariant;
